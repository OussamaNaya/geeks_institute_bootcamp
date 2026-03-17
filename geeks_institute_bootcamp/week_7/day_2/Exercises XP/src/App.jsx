import './App.css'
import Car from './components/Car'

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <h1>Welcome to my Garage</h1>
      <Car name={carinfo.name} model={carinfo.model} />
    </>
  )
}

export default App
