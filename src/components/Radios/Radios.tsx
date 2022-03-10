import { useState } from "react"
import Radio from "./Radio/Radio"
import { data } from "./Radios.data"
import { IRadios } from "./Radios.interface"

const Radios = () => {
    const [radios, changeRadios] = useState<IRadios[]>(data)

    const changeActive = (id: number) => {
        const copy = [...radios]
        copy.forEach(elem => {
            if (elem.id === id) {
                elem.isActive = true
            } else {
                elem.isActive = false
            }
        })
        changeRadios(copy)
    }

    return (
        <div className="mt-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">Radios</h2>
            {radios.map(elem => <Radio key={elem.id} id={elem.id} changeActive={changeActive} isActive={elem.isActive}>{elem.title}</Radio>)}
        </div>
    )
}

export default Radios