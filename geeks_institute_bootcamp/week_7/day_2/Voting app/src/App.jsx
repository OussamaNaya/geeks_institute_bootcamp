import { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 1 },
    { name: "Python", votes: 1 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <>
      <header className='text-white'>
        <h1 className='bg-blue-500 p-8 m-0 w-full text-4xl text-white'>Voting App</h1>
      </header>

      <h2 className='text-2xl mt-4 mb-4'>Vote Your Language!</h2>

      <div className='flex flex-col gap-2 items-center'>
        {languages.map((item, index) => (
          <div
            key={index}
            className='flex justify-between items-center p-4 bg-yellow-200 border border-gray-300 rounded-lg w-96'
          >
            <div className='text-xl'>{item.votes}</div>
            <div className='text-xl'>{item.name}</div>
            <button
              className='text-green-600 font-bold text-xl'
              onClick={() => handleVote(index)}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>

      <footer className='bg-blue-500 p-4 mt-10 mb-0 w-full'>
        <p className='text-white'>@Created by Oussama Naya</p>
      </footer>
    </>
  );
}

export default App;