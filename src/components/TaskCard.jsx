import { getDepartmentColor } from '@/hooks/getDepartmentColor';
import { getPriorityColor } from '@/hooks/getPriorityColor';
import React from 'react';

const Priority = ({ priority, color }) => {

    return (
        <div className="flex items-center h-[26px] rounded-[4px] p-1 gap-1 border-[1px]" style={{ borderColor: getPriorityColor(priority.id), color: color }}>
            <img src={priority.icon} alt={priority.name} />
            <span className="font-firaGO font-medium text-xs" style={{ color: getPriorityColor(priority.id) }}>{priority.name}</span>
        </div>
    )
}
const Department = ({ department }) => {

    const shortenDepartmentName = (name) => {
        if (name.length <= 10) {
            return name;
        }
        return name.split(' ').map(word => word.substring(0, 2)).join('.');
    };

    return (
        <div className="flex items-center py-[5px] px-[10px] max-w-[90px] h-[26px] gap-2 rounded-[15px]"
            style={{ backgroundColor: getDepartmentColor(department.id) }}
            title={department.name}>
            <span className='font-firaGO font-normal text-xs text-white'>{shortenDepartmentName(department.name)}</span>
        </div>
    )
}
const TaskCard = ({ task, color }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()} ${date.toLocaleString('Ka-ge', { month: 'short' })}, ${date.getFullYear()}`;
    };

    return (
        <div className={`flex h-full bg-white select-none flex-col rounded-2xl font-firaGO border-[1px] p-5 w-full gap-[28px]`} style={{ borderColor: color }}>
            {/* Priority */}

            <div className="flex justify-between items-center">
                <div className='flex gap-2.5'>
                    <Priority priority={task.priority} color={color} />
                    <Department department={task.department} />
                </div>
                <span className="text-xs text-ourBlack">{formatDate(task.due_date)}</span>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className="font-bold text-[15px] text-ourBlack">{task.name}</h3>
                <p className="text-sm font-normal text-ourBlack-light">
                    {task.description.length > 100 ? `${task.description.substring(0, 100)}...` : task.description}
                </p>
            </div>

            <div className='flex items-center justify-between'>
                <div>
                    {/* <img src={task.employee.avatar} alt="avatar" /> */}
                    <div className='rounded-full bg-gray-400 w-[31px] h-[31px]'></div>
                </div>
                <div className='flex gap-1'>
                    <img src="/src/assets/img/Comments.svg" alt="coment icon" />
                    <span className='text-ourBlack text-sm font-normal'>0</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;