import { BiCheck } from "react-icons/bi"

interface ICheckbox {
    id: number
    isActive: boolean
    changeActive: any
}

const Checkbox: React.FC<ICheckbox> = ({ id, isActive, changeActive, children }) => {
    const handleClick = () => {
        changeActive(id)
    }

    return (
        <label className="flex items-center gap-3 cursor-pointer my-2 " onClick={(): void => handleClick()}>
            <div className={"w-6 h-6 rounded flex items-center justify-center transition-all " + (isActive ? 'bg-[#CF2C2C]' : 'bg-[#222222]')}><BiCheck size={22} className={'transition duration-300 ' + (isActive ? 'scale-100' : 'scale-0')} /></div>
            <span>{children}</span>
        </label>
    )
}

export default Checkbox