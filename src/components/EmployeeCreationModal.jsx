import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";

const EmployeeCreationModal = ({ isOpen = false, onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.className.includes('modal-overlay')) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay fixed inset-0 flex justify-center items-start pt-20 bg-black/30 backdrop-blur-sm z-50"
                    onClick={handleOutsideClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white h-[770px] w-[915px] rounded-[10px] shadow-lg px-[50px] pt-[40px] pb-[60px]"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.4
                        }}
                    >
                        <div className="mt-auto flex justify-end gap-4">
                            <Button text='გაუქმება' solid={false} onClick={onClose} />
                            <Button text='დაამატე თანამშრომელი' />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EmployeeCreationModal;