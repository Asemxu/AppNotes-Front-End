import React from 'react';
import imgPass from '../../Images/password.svg';
import FormContraseña from './FormContraseña';
import imgClose from '../../Images/close.svg';
import Loader from '../Loader/Loader';
import imgCheck from '../../Images/check.svg';
export default class ModalRecuperarContraseña extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="background-modal"></div>
                <div className="modal">
                    <div className="modal-header">
                        <img src={imgClose} alt="imagen close"
                            onClick={this.props.modal}/>
                        <img src={imgPass} alt="imagen Password"/>
                        <h2>Cambiar contraseña</h2>
                       
                    </div>
                    {!this.props.isLoading && !this.props.status &&
                        <FormContraseña 
                            onChangeModal={this.props.onChangeModal}
                            onSubmit={this.props.onSubmit}
                            formData={this.props.formData} />
                    }
                    {this.props.isLoading &&
                        <div className="loader-container-modal">
                            <Loader/>
                        </div>
                    }
                    {this.props.status &&
                        <div className="modal-body">
                            <img src={imgCheck} alt="Imagen check" />
                            <h4>Se Envió el Correo Correctamente</h4>
                         </div>
                    }
                </div>
            </React.Fragment>
           
        )
    }
}

