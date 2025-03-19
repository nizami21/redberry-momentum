import { createContext, useContext, useState } from 'react';
import { useAPI } from './APIProvider';

const FilterContext = createContext();

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
}
//TODO: add filter functionality to the FilterProvider
export const FilterProvider = ({ children }) => {
    const { tasks } = useAPI();
    const [selectedFilters, setSelectedFilters] = useState({
        departments: [],
        priorities: [],
        employee: null
    });
    const [selectedDropdown, setSelectedDropdown] = useState('');

    const toggleDropdown = dropdown => {
        if (selectedDropdown === dropdown) {
            setSelectedDropdown('');
        }
        else {
            setSelectedDropdown(dropdown);
        }
    }


    const updateDepartmentFilters = departments => {
        setSelectedFilters({
            ...selectedFilters,
            departments
        })
    }
    const updatePriorityFilters = priorities => {
        setSelectedFilters({
            ...selectedFilters,
            priorities
        })
    }
    const updateEmployeeFilter = employee => {
        setSelectedFilters({
            ...selectedFilters,
            employee
        })
    }

    const removeFilter = (filterType, filterId) => {
        setSelectedFilters({
            ...selectedFilters,
            [filterType]: selectedFilters[filterType].filter(item => item.id !== filterId)
        })
    }

    const clearAllFilters = () => {
        setSelectedFilters({
            departments: [],
            priorities: [],
            employee: null
        })
    }

    const hasFilters = selectedFilters.departments.length > 0 ||
        selectedFilters.priorities.length > 0 ||
        selectedFilters.employee !== null;

    const value = {
        selectedFilters,
        selectedDropdown,
        hasFilters,

        toggleDropdown,
        updateDepartmentFilters,
        updatePriorityFilters,
        updateEmployeeFilter,
        removeFilter,
        clearAllFilters,
    }

    return (
        <FilterContext value={value} >
            {children}
        </FilterContext>
    )

}

export default FilterProvider;