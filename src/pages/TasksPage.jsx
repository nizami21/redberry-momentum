import { useAPI } from "@/contexts/APIProvider";
import Header from "/src/components/Header";
import TaskRow from "@/components/TaskRow";
import FilterBar from "@/components/FilterBar";

const TaskPage = () => {
    const { statuses, departments, priorities, tasks } = useAPI();
    return (
        <div className="select-auto bg-white">
            <Header />
            <section className="w-full mx-[120px]">
                <h1 className="font-firaGO select-none font-bold text-[34px] text-ourBlack mt-[40px] mb-[52px]">დავალებების გვერდი</h1>
                <FilterBar />
                <div className="flex gap-[54px]">
                    {statuses.map(status => (
                        <TaskRow key={status.id} status={status} tasks={tasks} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TaskPage;