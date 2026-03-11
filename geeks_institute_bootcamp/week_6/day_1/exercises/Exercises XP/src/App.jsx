import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;

  return (
    <>
      Hello World!
      {myelement}
      React is {sum} times better with JSX
    </>
  )
}

export default App
