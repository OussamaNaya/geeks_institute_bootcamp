import './App.css'
import Car from './components/Car'
import Events from './components/Events';
import Phone from './components/Phone'

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <h1>Welcome to my Garage</h1>
      <Car name={carinfo.name} model={carinfo.model} />
      <Events />

      <Phone />
    </>
  )
}

export default App
