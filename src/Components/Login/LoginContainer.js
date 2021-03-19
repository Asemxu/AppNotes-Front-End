import React from 'react';
import { Link } from 'react-router-dom';
import imgApp from '../../Images/notes.svg';
export default class LoginContainer extends React.Component{
    render(){
        return(
            <div className="container-login">
                <div className="container-header">
                    <img src={imgApp} alt="Logo"/>
                    <h2>AppNotes</h2>
                    <h5>Tu Aplicación para registrar tus notas</h5>
                </div>
                <form className="container-body w-75">
                    <input 
                        className="input-email w-100"
                        placeholder="Ingrese su Correo Electrónico" 
                        type="email" required/>
                    
                    <input 
                        className="input-pass w-100" 
                        placeholder="Ingrese su Contraseña"
                        type="password" required />

                    <Link to="#" className="d-block link-lost-pass">
                        <h5>¿olvidaste tu contraseña?</h5>
                    </Link>

                    <button type="submit" className="btn-login">
                        Iniciar Sesión
                    </button>                  
                </form>
                <Link to="/registro" className="d-block link-registrate">
                    <h5>No tienes una cuenta? regístrate aquí</h5>
                </Link>
            </div>
        )
    }
}