import React from 'react';

export default class formUpdate extends React.Component{
    render(){
        return(
            <form id="formUpdate" onSubmit={this.props.onSubmit} className="container-update-body w-75">
                <input 
                    className="input-email w-100"
                    placeholder="Nueva Contraseña" 
                    autoComplete="off"
                    onChange={this.props.onChange}
                    name="contraseña"
                    value={this.props.formData.contraseña}
                    type="password"/>
                
                <input 
                    className="input-pass w-100" 
                    placeholder="Confirmar contraseña"
                    autoComplete="off"
                    onChange={this.props.onChange}
                    name="recontraseña"
                    value={this.props.formData.recontraseña}
                    type="password" />

                <button type="submit" className="btn-cambiar">
                    Cambiar Contraseña
                </button>                  
            </form>
        )
    }
}