import CheckSquare from "@/assets/icons/CheckSquare";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MultiSelectDropdown = ({ options, isOpen, onClose, onSelect, selectedOptions }) => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (selectedOptions.length > 0) {
            setSelected(selectedOptions);
        }
    }, [selectedOptions])
    useEffect(() => {
        if (!isOpen && !selectedOptions.length > 0) {
            setSelected([]);
        }
    }, [isOpen, selectedOptions]);

    const handleToggleOption = option => {
        if (selected.some(item => item.id === option.id)) {
            setSelected(selected.filter(item => item.id !== option.id));
        } else {
            setSelected([...selected, option]);
        }
    }

    const handleSubmit = () => {
        onSelect(selected);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative w-[688px] border-[1px] border-purple select-none bg-white z-50 rounded-[10px] mt-2.5 overflow-hidden"
                >
                    <div className="p-6 pt-10 flex flex-col">
                        <div className="flex flex-col flex-wrap gap-5">
                            {options && options.map(option => (
                                <motion.div
                                    key={option.id}
                                    className="flex items-center gap-[15px] cursor-pointer"
                                    onClick={() => handleToggleOption(option)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <CheckSquare isChecked={selected.some(item => item.id === option.id)} />
                                    <span className="text-base">{option.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.button
                            className={`self-end w-[155px] h-[35px] text-white rounded-[20px] mt-6 ${selected.length > 0 ? 'bg-purple hover:bg-purple-light' : 'bg-gray-400 cursor-not-allowed'
                                }`}
                            onClick={handleSubmit}
                            whileHover={selected.length > 0 ? { scale: 1.05 } : {}}
                            whileTap={selected.length > 0 ? { scale: 0.95 } : {}}
                            disabled={selected.length === 0}
                        >
                            არჩევა
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MultiSelectDropdown;