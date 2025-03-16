import StatusName from "./SatusName";
import TaskCard from "./TaskCard";

const TaskRow = ({ status, tasks }) => {

    const filteredTasks = tasks.filter(task => task.status.id === status.id);

    const getStatusColor = (status) => {
        switch (status.id) {
            case 1:
                return '#F7BC30';
            case 2:
                return '#FB5607';
            case 3:
                return '#FF006E';
            case 4:
                return '#3A86FF';
            default:
                return '#F7BC30';
        }
    };

    return (
        <div className="flex flex-col w-[380px] gap-[30px]">
            <StatusName status={status} color={getStatusColor(status)} />
            <div className="mt-4 flex flex-col gap-4">
                {filteredTasks.map(task => (
                    <TaskCard key={task.id} task={task} color={getStatusColor(status)} />
                ))}
            </div>
        </div>
    );
};

export default TaskRow;