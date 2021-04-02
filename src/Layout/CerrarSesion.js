import React from 'react';
import imgClose from '../Images/close.svg';

const ModalCerrarSesion = (props) =>{
    return (
        <React.Fragment>
            <div className="background-modal"></div>
            <div className="modal modal-cerrar">
                <div className="modal-header-cerrar">
                    <img src={imgClose} alt="imagen close"
                        onClick={props.hide}/>
                    <h2>Cerrar Sesión</h2>
                </div>
                <div className="modal-body-cerrar">
                    <h5>¿Realmente desea salir de la aplicación? </h5>
                    <div className="buttons">
                        <button className="cancelar"onClick={props.hide} >Cancelar</button>
                        <button className="aceptar" onClick={props.cerrarSesion}>Aceptar</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) 
}

export default ModalCerrarSesion;

