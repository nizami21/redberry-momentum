import axiosInstance from '@/axios/config';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const APIContext = createContext();

const Alert = ({ message, onClose }) => {
    return (
        <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-md shadow-lg border border-gray-200 px-4 py-3 flex items-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-gray-700">{message}</div>
            <button
                onClick={onClose}
                className="ml-4 text-gray-400 hover:text-gray-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </motion.div>
    );
};

export const APIProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [statuses, setStatuses] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [alerts, setAlerts] = useState([]);

    const showAlert = useCallback((message, duration = 3000) => {
        const id = Date.now();
        setAlerts(prev => [...prev, { id, message }]);

        setTimeout(() => {
            setAlerts(prev => prev.filter(alert => alert.id !== id));
        }, duration);

        return id;
    }, []);

    const closeAlert = useCallback((id) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [statuses, priorities, departments, tasks, employees] = await Promise.all([
                axiosInstance.get('/statuses'),
                axiosInstance.get('/priorities'),
                axiosInstance.get('/departments'),
                axiosInstance.get('/tasks'),
                axiosInstance.get('/employees')
            ]);

            setStatuses(statuses.data);
            setPriorities(priorities.data);
            setDepartments(departments.data);
            setTasks(tasks.data);
            setEmployees(employees.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            showAlert('მონაცემების ჩატვირთვა ვერ მოხერხდა', 5000);
            console.error('Error fetching data:', error);
        }
    };

    const createEmployee = async (formData) => {
        try {
            const formDataToSend = new FormData();

            formDataToSend.append('name', formData.name);
            formDataToSend.append('surname', formData.surname);
            formDataToSend.append('department_id', formData.department_id);

            if (formData.avatar && formData.avatar instanceof File) {
                formDataToSend.append('avatar', formData.avatar);
            }

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            const res = await axiosInstance.post('/employees', formDataToSend, config);

            if (res.status === 201 && res.data) {
                setEmployees(prev => [...prev, res.data]);
                showAlert('თანამშრომელი წარმატებით შეიქმნა', 3000);
            }

            return { status: res.status, message: 'თანამშრომელი წარმატებით შეიქმნა' };
        } catch (error) {
            const status = error.response?.status || 500;
            let message = 'გთხოვთ სცადოთ მოგვიანებით';

            switch (status) {
                case 401:
                    message = '401 - თქვენ არ გაქვთ უფლება :(';
                    break;
                case 422:
                    message = 'გადაამოწმეთ ინფორმაცია და სცადეთ თავიდან';
                    break;
            }

            showAlert(message, 5000);
        }
    };

    const apiValues = {
        statuses,
        priorities,
        departments,
        tasks,
        employees,
        loading,
        fetchData,
        createEmployee,
        showAlert
    };

    return (
        <APIContext.Provider value={apiValues}>
            {children}
            <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
                <AnimatePresence>
                    {alerts.map(alert => (
                        <div key={alert.id} className="pointer-events-auto">
                            <Alert
                                message={alert.message}
                                onClose={() => closeAlert(alert.id)}
                            />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </APIContext.Provider>
    );
};

export const useAPI = () => {
    const context = useContext(APIContext);
    if (!context) {
        throw new Error('useAPI must be used within an APIProvider');
    }
    return context;
};