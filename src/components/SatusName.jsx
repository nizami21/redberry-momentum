const StatusName = ({ status, color }) => {
    return (
        <div className="rounded-[10px] p-[15px] w-full h-[54px] flex items-center justify-center" style={{ backgroundColor: color }}>
            <p className="font-firaGO text-xl font-[500] text-white">{status.name}</p>
        </div>
    )
}

export default StatusName;