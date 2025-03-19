import axiosInstance from '@/axios/config';
import React, { createContext, useContext, useEffect, useState } from 'react';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [statuses, setStatuses] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [employees, setEmployees] = useState([])
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])
    const fetchData = async () => {
        const [statuses, priorities, departments, tasks, employees] = await Promise.all([
            axiosInstance.get('/statuses'),
            axiosInstance.get('/priorities'),
            axiosInstance.get('/departments'),
            axiosInstance.get('/tasks'),
            axiosInstance.get('/employees')
        ])
        setStatuses(statuses.data);
        setPriorities(priorities.data);
        setDepartments(departments.data);
        setTasks(tasks.data);
        setEmployees(employees.data);
        setLoading(false);
    }


    const values = {
        statuses,
        priorities,
        departments,
        tasks,
        employees,
        loading,
        fetchData
    }
    return (
        <APIContext value={values}>
            {children}
        </APIContext>
    );
};

export const useAPI = () => {
    return useContext(APIContext);
};