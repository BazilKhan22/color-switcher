import React, { useState } from 'react';

const Button = ({ className, children, onClick }) => {
  return (
    <div className="inline-block">
      <button 
        onClick={onClick}
        className={`${className} text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-150 transform hover:scale-[1.02] active:scale-95 m-2`}
      >
        {children}
      </button>
    </div>
  );
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');
  
  const colors = [
    { name: 'pink', bg: 'bg-pink-600', hover: 'hover:bg-pink-700' },
    { name: 'blue', bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { name: 'green', bg: 'bg-green-600', hover: 'hover:bg-green-700' },
    { name: 'red', bg: 'bg-red-600', hover: 'hover:bg-red-700' },
    { name: 'yellow', bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
    { name: 'purple', bg: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    { name: 'black', bg: 'bg-gray-800', hover: 'hover:bg-gray-900' }
  ];

  const changeColor = (colorObj) => {
    if (colorObj.name === 'black') {
      setBackgroundColor('bg-gray-800');
    } else {
      setBackgroundColor(colorObj.bg);
    }
  };

  return (
    <div className={`min-h-screen ${backgroundColor} transition-colors duration-300 flex flex-col items-center p-8`}>

      <h1 className="text-center text-4xl font-extrabold text-gray-800 mt-10 mb-8 tracking-tight">
        🎨 Simple Color Switcher
      </h1>
      
      <div className="w-full max-w-2xl p-4 bg-white rounded-2xl shadow-2xl flex flex-wrap justify-center border-4 border-indigo-500/50">
        
        {colors.map((colorObj) => (
          <Button 
            key={colorObj.name}
            className={`${colorObj.bg} ${colorObj.hover}`}
            onClick={() => changeColor(colorObj)}
          >
            {colorObj.name.charAt(0).toUpperCase() + colorObj.name.slice(1)}
          </Button>
        ))}
        
        <Button 
          className="bg-gray-500 hover:bg-gray-600"
          onClick={() => setBackgroundColor('bg-gray-100')}
        >
          Reset to Gray
        </Button>

      </div>
      
      <div className="mt-10 p-4 text-center">
        <p className="text-xl font-semibold text-gray-700">
          Current Background: <span className="font-mono text-indigo-600">{backgroundColor}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
        </p>
      </div>

    </div>
  );
};

export default App;