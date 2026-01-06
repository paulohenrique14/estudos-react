import React, { useState } from 'react'
import styles from './PrimeiroForm.module.css'

const PrimeiroForm = ({user}) => {
    const [name, setName] = useState(user.userName ? user.userName : '')
    const [surname, setSurname] = useState(user.userSurname ? user.userSurname : '')
    const [reason, setReason] = useState(user.userReason ? user.userReason : '')
    const [role, setRole] = useState(user.userRole ? user.userRole : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); 

        if (role === 'nothing') {
            console.log('Favor escolher a profissão.');
        }

        console.log(name);
        console.log(surname);
        console.log(reason);
        console.log(role)
    }

    console.log(user.userRole)
    return (
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
            {/*Criando formulário */}
            <div>
                <label htmlFor="name">Nome: </label>
                
                <input 
                    type="text" 
                    name='name' 
                    onChange={handleName}
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="surname">Sobrenome: </label>
                
                <input 
                    type="text" 
                    name='surname' 
                    onChange={(e) => {setSurname(e.target.value)}} 
                    value={surname}
                />
            </div>
            {/*label envolvendo o input */}
            <label>
                Idade: 
                
                <input 
                    type="number" 
                    name="age" 
                />
            </label>

            <label>
                Motivo do contato
                <textarea 
                    value={reason}
                    onChange={(e) => {setReason(e.target.value)}} 
                    name='reason'
                />
            </label>
            <label>
                Profissão: 
                <select 
                    name='role'
                    onChange={(e) => {setRole(e.target.value)}}
                    value={role}
                >
                    <option value="nothing">Selecionar</option>
                    <option value="developer">Programador</option>
                    <option value="designer">Designer</option>
                    <option value="editor">Editor de vídeos</option>
                    <option value="photographer">Fotógrafo</option>
                </select>

            </label>
            <div className={styles.formSubmit}>
                
                <input 
                    type="submit" 
                    value="Enviar"
                />
            </div>
        </form>
    </div>

  )
}

export default PrimeiroForm