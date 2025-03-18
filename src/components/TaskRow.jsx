import { getStatusColor } from "@/hooks/getStatusColor";
import { motion } from 'framer-motion';
import TaskCard from "./TaskCard";
import StatusName from "./SatusName";

const TaskRow = ({ status, tasks }) => {
    const filteredTasks = tasks.filter(task => task.status.id === status.id);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="flex flex-col select-none w-[380px] gap-[30px]">
            <StatusName status={status} color={getStatusColor(status)} />
            <motion.div
                className="mt-4 flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredTasks.map(task => (
                    <motion.div key={task.id} variants={itemVariants}>
                        <TaskCard task={task} color={getStatusColor(status)} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TaskRow;