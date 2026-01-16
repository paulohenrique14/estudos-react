import React, {useEffect, useState} from 'react'
import { useGetData } from '../../hooks/useGetData';

const Requisicao = () => {

    const url = 'http://localhost:3000/products'

    const {dataReturn:items} = useGetData(url);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    console.log(items)

    const handleSubmit = async(e) =>{
      e.preventDefault();

      console.log(name, price)

      const newProduct = {
        name,
        price
      };

      const res = await fetch(url, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      })

      const addedProduct = await res.json()

      setDataReturn((prevData) => [...prevData, addedProduct])
    }

  return (
    <div>
        <h1>Requicições HTTP</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <span>
              Nome do produto
            </span>
            <input type='text' name='name' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label>
            <span>
              Preço do produto
            </span>
            <input type='number' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
          </label>
          <input type="submit" value="Criar produto"/>
        </form>
        
        <div>
          {items && items.map((product) => (
              <p key={product.id}>{product.name} - R${product.price}</p>
            ))
          }
        </div>

    </div>
  )
}

export default Requisicao