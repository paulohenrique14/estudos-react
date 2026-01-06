import React from 'react'
import { useState } from 'react';

const SegundoForm = ({user}) => {
    
    const [name, setName] = useState(user.userName ? user.userName : '');
    const [age, setAge] = useState(user.userAge ? user.userAge : '');
    const [gender, setGender] = useState(user.userGender ? user.userGender.toUpperCase() : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(gender);
        let readableGender;

        switch (gender) {
            case 'M':
                readableGender = 'Homem';
                break;
            case 'W':
                readableGender = 'Mulher';
                break;
            case 'R':
                console.log('favor preencher o sexo corretamente')
                break;
            default:
                readableGender = 'Outros';
        }
        
        console.log(name, age, readableGender)

    }
  return (
    <div>
        <h1>Segundo formulário</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input 
                    type="text" 
                    placeholder="Digite aqui o seu nome..." 
                    name="name" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </label>
            <label>
                <span>Idade: </span>
                <input 
                    type="number"
                    name="age"  
                    placeholder="Digite aqui a sua idade..."
                    value={age}
                    onChange={(e) => {setAge(e.target.value)}}
                />
            </label>
            <label>
                Sexo:  
                <select
                    name='gender'
                    value={gender}
                    onChange={(e) => {setGender(e.target.value)}}
                >
                    <option value="R">Selecionar</option>
                    <option value="M">Homem</option>
                    <option value="W">Mulher</option>
                    <option value="O">Prefiro não dizer</option>
                </select>
            </label>

            <input type="submit" value="Enviar"/>

        </form>
    </div>
  )
}

export default SegundoForm