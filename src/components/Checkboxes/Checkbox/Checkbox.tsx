import { useState } from "react"
import { BiCheck } from "react-icons/bi"

const Checkbox: React.FC = ({ children }) => {
    const [active, setActive] = useState(true)

    return (
        <label className="flex items-center gap-3 cursor-pointer my-2 " onClick={(): void => setActive(!active)}>
            <div className={"w-6 h-6 rounded flex items-center justify-center transition-all " + (active ? 'bg-[#CF2C2C]' : 'bg-[#222222]')}><BiCheck size={22} className={'transition duration-300 ' + (active ? 'scale-100' : 'scale-0')} /></div>
            <span>{children}</span>
        </label>
    )
}

export default Checkbox