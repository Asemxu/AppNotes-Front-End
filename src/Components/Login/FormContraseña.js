import React from 'react';

const FormContraseña = (props) =>{
    return <form className="modal-body w-100" id="formCambiar">
                <input 
                    className="input-email w-85"
                    placeholder="Correo Electrónico" 
                    autoComplete="on"
                    name="correo"
                    value={props.formData.correo}
                    onChange={props.onChangeModal}
                    type="email"/>
                <button type="submit" onClick={props.onSubmit} className="btn-send-email w-100">
                    Enviar Email
                </button>
            </form>
}


export default FormContraseña;