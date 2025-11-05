import { useState } from 'react';

function App() {
  const [colour, setColour] = useState('olive');

  const handleClick = (e) => {
    const selectedColor = e.target.id.toLowerCase();
    document.body.style.backgroundColor = selectedColor;
    setColour(selectedColor);
  };

  return (
    <>
      <div className='h-screen w-full'>
        <h1 className='shadow-xl rounded-3xl mt-10 ml-70 text-center border-2 border-gray-500 bg-purple-800 p-3 w-2xl text-white'>
          Background Color Changer
        </h1>
        <div
          className='bg-gray-200 flex h-20 rounded-4xl p-1.5 m-7 fixed bottom-11 w-5xl justify-around ml-50'
          id='buttons'
        >
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'red', color: 'white'}} id='Red'>Red</button>
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'blue', color: 'white' }} id='Blue'>Blue</button>
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'white', color: 'black' }} id='White'>White</button>
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'black', color: 'white' }} id='Black'>Black</button>
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'purple', color: 'white' }} id='Purple'>Purple</button>
          <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: 'green', color: 'white' }} id='Green'>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
