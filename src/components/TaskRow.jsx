import { getStatusColor } from "@/hooks/getStatusColor";
import StatusName from "./SatusName";
import TaskCard from "./TaskCard";

const TaskRow = ({ status, tasks }) => {

    const filteredTasks = tasks.filter(task => task.status.id === status.id);



    return (
        <div className="flex flex-col select-none w-[380px] gap-[30px]">
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