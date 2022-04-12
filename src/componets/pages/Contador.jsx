import React from 'react'
import {Button} from 'react-bootstrap'
import {useState} from 'react'

const Contador = () => {
    
    let [numero, setNumero] = useState(0)

    function adicao (){
        setNumero(++numero)
        console.log(++numero)
    }


    function subtracao (){
        setNumero(--numero)
        console.log(--numero)
    }

  return (
    <div>
        <h1>Contador</h1>
        <Button variant="danger" onClick={subtracao}>-</Button>
        {numero}
        <Button variant="success" onClick={adicao}>+</Button>
    </div>
  )
}

export default Contador