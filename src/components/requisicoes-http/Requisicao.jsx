import React, {use, useEffect, useState} from 'react'
import { useGetData } from '../../hooks/useGetData';
import { usePostData } from '../../hooks/usePostData';

const Requisicao = () => {

    const url = 'http://localhost:3000/products'

    const {dataReturn} = useGetData(url)
    const {handlePostData} = usePostData(url)

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

  

    const handleSubmit = async(e) =>{
      e.preventDefault();

      const newProduct = {
        name,
        price
      };

      handlePostData(newProduct)

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
          {dataReturn && dataReturn.map((product) => (
              <p key={product.id}>{product.name} - R${product.price}</p>
            ))
          }
        </div>

    </div>
  )
}

export default Requisicao