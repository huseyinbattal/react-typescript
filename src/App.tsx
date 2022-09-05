import React, { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const [number, setNumber] = useState(0);
  const [text,setText]=useState<string>("u")
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <br/>
        <button onClick={() => {
          setNumber(number + 1)
          setText("üssün")
        }} >Sayi Arttır</button>
        <br/> 
        {number}
        <br />
        {text}
      </header>
    </div>
  );
}

export default App;
