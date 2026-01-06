import React, {useEffect, useState} from 'react'

const Requisicao = () => {

    const [execute, setExecute] = useState(0)

    useEffect(() => {
        console.log("requisição na API")
    }, [])

    console.log('requisicao react')

  return (
    <div>
        <h1>Requicições HTTP</h1>
        <button onClick={() => {setExecute(execute +1)}}>Requisitar API</button>
    </div>
  )
}

export default Requisicao