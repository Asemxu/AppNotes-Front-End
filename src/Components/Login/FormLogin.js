import React from 'react';
import { Link } from 'react-router-dom';
const FormLogin = (props) =>{
    return <form onSubmit={props.onSubmit} className="container-body w-75">
        <input 
            className="input-email w-100"
            placeholder="Ingrese su Correo Electrónico" 
            autoComplete="on"
            value={props.formData.correo}
            onChange={props.onChangeLogin}
            name="correo"
            type="email"/>
        
        <input 
            className="input-pass w-100" 
            placeholder="Ingrese su Contraseña"
            autoComplete="off"
            onChange={props.onChangeLogin}
            value={props.formData.contraseña}
            name="contraseña"
            type="password" />

        <Link to="#" className="d-block link-lost-pass"
            onClick={props.modal}>
            <h5>¿olvidaste tu contraseña?</h5>
        </Link>

        <button type="submit" className="btn-login">
            Iniciar Sesión
        </button>                  
    </form>
}

export default FormLogin;