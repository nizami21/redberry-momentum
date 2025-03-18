import { useAPI } from "@/contexts/APIProvider";
import Header from "/src/components/Header";
import { motion } from 'framer-motion';
import FilterBar from "@/components/FilterBar";
import TaskRow from "@/components/TaskRow";

const TaskPage = () => {
    const { statuses, departments, priorities, tasks } = useAPI();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <div className="select-auto bg-white">
            <Header />
            <section className="w-full mx-[120px]">
                <motion.h1
                    className="font-firaGO select-none font-bold text-[34px] text-ourBlack mt-[40px] mb-[52px]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    დავალებების გვერდი
                </motion.h1>

                <FilterBar />

                <motion.div
                    className="flex gap-[54px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {statuses.map((status, index) => (
                        <motion.div key={status.id} variants={itemVariants}>
                            <TaskRow status={status} tasks={tasks} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}

export default TaskPage;