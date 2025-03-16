import { useAPI } from "@/contexts/APIProvider";
import Header from "/src/components/Header";
import StatusName from "@/components/SatusName";
import TaskRow from "@/components/TaskRow";

const TaskPage = () => {
    const { statuses, departments, priorities, tasks } = useAPI();
    console.log(tasks);
    return (
        <div>
            <Header />
            <section className="w-full mx-[120px]">
                <h1 className="font-firaGO font-bold text-[34px] text-ourBlack mt-[40px] mb-[52px]">დავალებების გვერდი</h1>
                <div className="border bg-[#DEE2E6] rounded-[10px] w-[688px] h-[44px] mb-[80px]"></div>
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