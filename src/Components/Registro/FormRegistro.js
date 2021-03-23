import React from 'react';

const FormRegistro =  (props)  =>{
    return  <form onSubmit={props.onSubmit} className="container-body-registro w-75">
                <input 
                    className="input w-100"
                    value={props.formData.nombres}
                    placeholder="Nombres" 
                    name="nombres"
                    autoComplete="on"
                    onChange={props.onChange}
                    type="text"/>

                <input 
                    className="input w-100"
                    placeholder="Apellidos" 
                    value={props.formData.apellidos}
                    onChange={props.onChange}
                    autoComplete="on"
                    name="apellidos"
                    type="text"/>

                <input 
                    className="input-email w-100"
                    placeholder="Correo Electrónico" 
                    value={props.formData.correo}
                    onChange={props.onChange}
                    autoComplete="on"
                    name="correo"
                    type="email"/>

                <input 
                    className="input-pass w-100"
                    placeholder="Contraseña" 
                    onChange={props.onChange}
                    value={props.formData.contraseña}
                    autoComplete="off"
                    name="contraseña"
                    type="password"/>

                <input 
                    className="input-pass w-100"
                    placeholder="Confirmar Contraseña" 
                    onChange={props.onChange}
                    value={props.formData.recontraseña}
                    autoComplete="off"
                    name="recontraseña"
                    type="password"/>

                <button type="submit" className="btn-registro">
                    Registrarse
                </button>                  
            </form>
}


export default FormRegistro;