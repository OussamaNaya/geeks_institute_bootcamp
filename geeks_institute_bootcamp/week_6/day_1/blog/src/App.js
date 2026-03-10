import Car from './Car';
import './Car.css'
import Actor from './Actor';

const actors = [
  {
    firstName: "Robert",
    lastName: "Downey Jr.",
    image: "https://picsum.photos/200?random=1"
  },
  {
    firstName: "Scarlett",
    lastName: "Johansson",
    image: "https://picsum.photos/200?random=2"
  },
  {
    firstName: "Leonardo",
    lastName: "DiCaprio",
    image: "https://picsum.photos/200?random=3"
  }
];

const brand = "Ford"

const App = () => {
  return (
    <div className='box'>
      <h1>In the App.js</h1>
      <Car carBrand={brand} name="Lightning McQueen"/>
      <Actor actors={actors} />
    </div>
  )
}

export default App;