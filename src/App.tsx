import Checkboxes from "./components/Checkboxes/Checkboxes"
import Radios from "./components/Radios/Radios"

const App = () => {
  return (
    <div className="text-white">
      <h1 className="text-center text-3xl font-black pt-5">React Components Pack</h1>
      <Checkboxes />
      <Radios />
    </div>
  )
}

export default App