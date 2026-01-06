import { useState } from 'react'
import './App.css'
import PrimeiroForm from './components/forms/PrimeiroForm'
import SegundoForm from './components/forms/SegundoForm'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    userName: "José",
    userSurname: "Magalhaes",
    userReason: "Parar de gastar com coisas fúteis",
    userRole: "photographer"
  }

  const secUser = {
    userName: "Calebe",
    userAge: "41",
    userGender: "m"
  }

  return (
    <>
      <h1>hello world</h1>
      {/*<PrimeiroForm user={user}/>*/}
      <SegundoForm user={secUser}/>
    </>
  )
}

export default App
