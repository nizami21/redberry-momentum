import DropdownIcon from "@/assets/icons/DropdownIcon";
import { useState } from "react";

const FilterBar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState('');

    const handleDropdownClick = (dropdown) => {
        if (selectedDropdown == dropdown) {
            setSelectedDropdown('')
        } else {
            setSelectedDropdown(dropdown);
        }
    };

    return (
        <div className="font-firaGO border-[1px] border-[#DEE2E6] rounded-[10px] w-[688px] h-[44px] mb-[80px]">
            <div className="flex justify-between items-center h-full">
                <div
                    onClick={() => handleDropdownClick('department')}
                    className={`w-[200px] py-2.5 px-[18px] flex items-center justify-center gap-2 cursor-pointer ${selectedDropdown === 'department' ? 'text-purple' : 'text-ourBlack-gray'}`}
                >
                    <span className="text-base">დეპარტამენტი</span>
                    <DropdownIcon color={selectedDropdown === 'department' ? '#8338EC' : '#0D0F10'} />
                </div>
                <div
                    onClick={() => handleDropdownClick('priority')}
                    className={`w-[200px] py-2.5 px-[18px] flex items-center justify-center gap-2 cursor-pointer ${selectedDropdown === 'priority' ? 'text-purple' : 'text-ourBlack-gray'}`}
                >
                    <span className="text-base">პრიორიტეტი</span>
                    <DropdownIcon color={selectedDropdown === 'priority' ? '#8338EC' : '#0D0F10'} />
                </div>
                <div
                    onClick={() => handleDropdownClick('employee')}
                    className={`w-[200px] py-2.5 px-[18px] flex items-center justify-center gap-2 cursor-pointer ${selectedDropdown === 'employee' ? 'text-purple' : 'text-ourBlack-gray'}`}
                >
                    <span className="text-base">თანამშრომელი</span>
                    <DropdownIcon color={selectedDropdown === 'employee' ? '#8338EC' : '#0D0F10'} />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;