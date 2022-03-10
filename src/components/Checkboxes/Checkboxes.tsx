import { useState } from "react"
import Checkbox from "./Checkbox/Checkbox"
import { data } from "./Checkboxes.data"
import { ICheckboxes } from "./Checkboxes.interface"

const Checkboxes = () => {
    const [checkboxes, changeCheckboxes] = useState<ICheckboxes[]>(data)

    const changeActive = (id: number) => {
        const copy = [...checkboxes]
        copy.forEach(elem => {
            if (elem.id === id) {
                elem.isActive = !elem.isActive
            }
        })
        changeCheckboxes(copy)
    }

    return (
        <div className="mt-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">Checkboxes</h2>
            {
                checkboxes.map(elem => <Checkbox key={elem.id} changeActive={changeActive} id={elem.id} isActive={elem.isActive}>{elem.title}</Checkbox>)
            }
        </div>
    )
}

export default Checkboxes