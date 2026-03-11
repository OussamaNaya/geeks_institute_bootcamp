import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };


  return (
    <>
      Hello World!
      {myelement}
      React is {sum} times better with JSX

      <h3>Hello Mr {user.lastName} {user.firstName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </>
  )
}

export default App
