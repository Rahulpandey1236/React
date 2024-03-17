import { useState } from "react";//hooks


function App() {

 let [Counter , setcounter] =  useState(15)

 // let Counter = 15;

  const addvalue = () =>{
    console.log(Counter);
    //Counter = Counter + 1
    setcounter(Counter+1)
  }

  const removevalue = ()=>{
    setcounter(Counter-1)
  }
  

  return (
    <>
     
    <h1>Hooks</h1>
    <h2>Counter value {Counter} </h2>
    <button onClick={addvalue}>Add value {Counter}</button>
    <br />
    <br></br>
    <button onClick={removevalue}>Remove value{Counter}</button>
    <p>footer {Counter}</p>
     
    </>
  )
}

export default App
