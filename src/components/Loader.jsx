import { motion } from "framer-motion";
import hourglassIcon from '@/assets/img/Hourglass.svg';

const Loader = () => {
    return (
        <div className="w-full flex items-center justify-center h-screen pb-40">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-firaGO text-xl text-gray-600 flex flex-col items-center gap-16"
            >
                <img src={hourglassIcon} alt="Hourglass" className="w-24 h-24 animate-spin" />
                <h1 className="font-fredokaOne text-2xl font-bold animate-pulse">მონაცემების ჩატვირთვა</h1>
            </motion.div>
        </div>
    )
}

export default Loader;