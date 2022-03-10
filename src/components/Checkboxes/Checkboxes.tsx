import Checkbox from "./Checkbox/Checkbox"

const Checkboxes = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">Checkboxes</h2>
            <Checkbox>Checkbox 1</Checkbox>
            <Checkbox>Checkbox 2</Checkbox>
            <Checkbox>Checkbox 3</Checkbox>
        </div>
    )
}

export default Checkboxes