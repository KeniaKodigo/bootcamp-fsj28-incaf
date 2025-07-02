import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authServices'

export default function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const handleLogin = async (data) => {
        try{
            const response = await login(data)
            console.log(response)
            //si la respuesta es un exito guardamos el token en una session
            if(response?.token){
                sessionStorage.setItem('apiToken', response.token)
                navigate('/accommodations')
            }else{
                alert("No estas autorizado")
            }
        }catch(error){
            console.log("Error al autenticarse")
        }
    }

    return (
        <div>
            <h1>Inicio de sesion</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div style={{marginBottom: "1rem"}}>
                    <label htmlFor="">Correo</label>
                    <input type="email" {...register('email')} />
                </div>
                <div style={{marginBottom: "1rem"}}>
                    <label htmlFor="">Contraseña</label>
                    <input type="text" {...register('password')} />
                </div>
                <div>
                    <button type='submit'>Iniciar Sesion</button>
                </div>
            </form>
        </div>
    )
}
