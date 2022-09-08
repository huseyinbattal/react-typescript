import React, { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Title from './components/title';
import ParentComponent from './components/ParentComponent';
import ArrayObjects from './components/ArrayObjects';
import TestClick from './components/TestClick';

function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState<string>("u")
  
  const logToConsole = (parametre: string):void => {
  console.log(parametre)
}

  const calculateNumber = (s1:number,s2:number):number => {
    return s1+s2
  }

  const waitThreeSeconds = ():Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000*3);
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => {
          waitThreeSeconds().then((results:number) => {
            alert(results)
          })
        }} >Tıkla ve 3 saniye bekle</button>

        <TestClick onClick={() => {
          alert("ss")
        }} />

        <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          console.log(e)
        }}>
I am a DIV
        </div>

        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }} />
        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          console.log(e.currentTarget)
}}>Tıkla</button>

       {calculateNumber(5,6).toString().toUpperCase().padEnd(3,"*")}
      <button onClick={()=>{logToConsole("test")}}>Yazdır</button>
        <div>
          <ArrayObjects
            otherUserArray={[{userName:"Hüseyin",userLastName:"Battal"},{userName:"Emir",userLastName:"Battal"}]}
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
       </div>
      </header>
    </div>
  );
}

export default App;
