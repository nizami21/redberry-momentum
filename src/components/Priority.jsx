import { getPriorityColor } from '@/hooks/getPriorityColor';
const Priority = ({ priority, color }) => {

    return (
        <div className="flex items-center h-[26px] rounded-[4px] p-1 gap-1 border-[1px]" style={{ borderColor: getPriorityColor(priority.id), color: color }}>
            <img src={priority.icon} alt={priority.name} />
            <span className="font-firaGO font-medium text-xs" style={{ color: getPriorityColor(priority.id) }}>{priority.name}</span>
        </div>
    )
}

export default Priority;