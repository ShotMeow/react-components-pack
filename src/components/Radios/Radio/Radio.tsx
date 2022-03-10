interface IRadio {
    id: number
    isActive: boolean
    changeActive: any
}

const Radio: React.FC<IRadio> = ({ id, isActive, children, changeActive }) => {
    const handleClick = (id: number) => {
        changeActive(id)
    }

    return (
        <label className="flex items-center gap-3 cursor-pointer my-2" onClick={(): void => handleClick(id)}>
            <div className="w-6 h-6 rounded-full bg-[#222222] flex items-center justify-center transition-all"><div className={"w-3 h-3 rounded-full bg-[#CF2C2C] transition-all " + (isActive ? 'scale-100' : 'scale-0')}></div></div>
            <span>{children}</span>
        </label>
    )
}

export default Radio