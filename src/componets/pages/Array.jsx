import React from 'react'

const Array = () => {
  
  const carros = ['Supra' , 'mazda', 'skyline', 'nissan 350z']
  const pessoas = ['Caiozin', 'pedrin', 'joaozin', 'cleytinho']
  
  return (
    <div>
      <h1>Array</h1>

          <h3>Carros</h3>
      {
        carros.map(item => (
          <p>{item}</p>          
        ))
      }

          <h3>Pessoas</h3>
      <ul>
      {
        pessoas.map(item => (
          <li>{item}</li>          
        ))
      }
      </ul>

    </div>
  )
}

export default Array