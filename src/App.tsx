import React, { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Title from './components/title';
import ParentComponent from './components/ParentComponent';
import ArrayObjects from './components/ArrayObjects';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState<string>("u")
  
  const logToConsole = (parametre:string) => {
  console.log(parametre)
}

  return (
    <div className="App">
      <header className="App-header">
      <button>Yazdır</button>
        <h1>
          <ArrayObjects
            otherUserArray={[{userName:"Hüseyin",userLastName:"Battal"},{userName:"Alper",userLastName:"Battal"}]}
          userObj={{ userName: "Test", userLastName: "deneme" }}
        userArray={["a","b","c"]}
        />
        <br />
        <ParentComponent>
          {
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque rerum inventore sint unde esse provident temporibus similique quibusdam in, repellendus ab et. Ipsa temporibus illum fugiat voluptatum. Quisquam temporibus voluptatibus harum. Ex provident fugiat blanditiis similique ratione consectetur iusto voluptate maxime perspiciatis quis, laboriosam omnis quaerat cupiditate maiores ipsa nulla.</p>    
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
       </h1>
      </header>
    </div>
  );
}

export default App;
