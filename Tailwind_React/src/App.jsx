import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  let myobj = {
    user:"rahul",
    age:18
  }

  let newar = [1,2,3]

  return (
    <>
      
    <h1 className='bg-red-300 rounded-xl p-7 m-5'>Tailwind test</h1>


<Card username="chaiorcode" btnText = "visitme" />

<Card username="rahul2" />







    </>
  )
}

export default App
