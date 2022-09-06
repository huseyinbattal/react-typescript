import React, { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Title from './components/title';
import ParentComponent from './components/ParentComponent';

function App() {
  const [number, setNumber] = useState(0);
  const [text,setText]=useState<string>("u")
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent>
          {
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ullam nihil, velit dolorem officia sit? Nihil pariatur expedita cupiditate ipsum recusandae debitis temporibus delectus voluptates quasi laborum. Harum, quo voluptatem?</p>    
          }
        </ParentComponent>
        <br/>
        <Title subtitle={300} title='Hello!' bgColor='red' />
        <br/>
        <HelloWorld isActive text='Hello' onClick={() => {console.log("Merhaba")
        }} number={10} />
        <br/>
        <button onClick={() => {
          setNumber(number + 1)
          setText("hb")
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
