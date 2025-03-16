import React from 'react';

const Priority = ({ priority, color }) => {
    return (
        <div className="flex items-center w-[86px] h-[26px] rounded-[4px] p-1 gap-1 border-[1px]" style={{ borderColor: color, color: color }}>
            <img src={priority.icon} alt={priority.name} />
            <span className="font-firaGO font-medium text-xs">{priority.name}</span>
        </div>
    )
}

const TaskCard = ({ task, color }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()} ${date.toLocaleString('Ka-ge', { month: 'short' })}, ${date.getFullYear()}`;
    };

    return (
        <div className={`flex flex-col rounded-2xl font-firaGO border-[1px] p-5 w-full gap-[28px]`} style={{ borderColor: color }}>
            {/* Priority */}

            <div className="flex justify-between items-center">
                <Priority priority={task.priority} color={color} />
                <span className="text-xs text-ourBlack">{formatDate(task.due_date)}</span>
            </div>

            {/* Task name and description */}
            <div className='flex flex-col gap-3'>
                <h3 className="font-bold text-[15px] text-ourBlack">{task.name}</h3>
                <p className="text-sm font-normal text-ourBlack-light ">{task.description}</p>
            </div>

            {/* footer */}
            <div className='flex items-center justify-between'>
                <div>
                    {/* <img src={task.employee.avatar} alt="avatar" /> */}
                    <div className='rounded-full bg-gray-400 w-[31px] h-[31px]'></div>
                </div>
                <div className='flex gap-1'>
                    <img src="/src/assets/icons/Comments.svg" alt="coment icon" />
                    <span className='text-ourBlack text-sm font-normal'>0</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;