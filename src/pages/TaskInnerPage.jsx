import { useAPI } from "@/contexts/APIProvider";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const TaskInnerPage = () => {
    const location = useLocation();
    const { showAlert } = useAPI()
    const navigate = useNavigate()
    const { tasks } = useAPI();
    const task = tasks.find(task => task.id == location.pathname.replace('/task/', ''));
    if (!task) {
        navigate('*');
        showAlert('მსგავსი დავალება არ არსებობს', 3000);
        return null;
    }

    return (
        <div className="bg-white h-screen w-screen">
            <Header />
            <section className="mx-[120px]">
                <motion.h1
                    className="font-firaGO select-none font-bold text-[34px] text-ourBlack mt-[40px] mb-[52px]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    დავალებების გვერდი
                </motion.h1>
            </section>
        </div>
    )
}

export default TaskInnerPage;