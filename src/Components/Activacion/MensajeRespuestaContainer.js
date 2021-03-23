import React from 'react';
import imgClose from '../../Images/close.svg'
import imgCheck from '../../Images/check.svg';
import imgApp from '../../Images/notes.svg';
import { Link} from 'react-router-dom'
export default class MensajeRespuestaContainer extends React.Component{
    render(){
        return(
            <div className="container-activated">
                <div className="container-activated-header">
                    <img src={imgApp} alt="Logo"/>
                    <h2>AppNotes</h2>
                </div>
                <div className="container-activated-body">
                    {this.props.status &&
                        <img src={imgCheck} alt="imagen close" />
                    }
                    {!this.props.status &&
                        <img src={imgClose} alt="imagen check" />
                    }
                    <h3>{this.props.message}</h3>
                </div>
                
                <Link to="/" className="d-block link-inicio">
                    <h5>Ir al Inicio</h5>
                </Link>
            </div>
        )
    }
}