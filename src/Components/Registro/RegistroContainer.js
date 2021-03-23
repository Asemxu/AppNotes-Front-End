import React from 'react';
import imgApp from '../../Images/notes.svg';
import FormRegistro from './FormRegistro';
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader';

export default class RegistroContainer extends React.Component{
    render(){
        return(
            <div className="container-registro">
                <div className="container-header-registro">
                    <img src={imgApp} alt="Logo"/>
                    <h2>Regístrate en AppNotes</h2>
                    <h5>Tu Aplicación para registrar tus notas</h5>
                </div>
                {!this.props.isLoading &&
                    <FormRegistro 
                        onChange={this.props.onChange}
                        onSubmit={this.props.onSubmit}
                        formData={this.props.formData}    
                    />
                }
                {this.props.isLoading &&
                    <div className="container-body-registro-loader">
                        <Loader />
                    </div>
                }
                
                <Link to="/" className="d-block link-inicia-sesion">
                    <h5>Ya tienes una cuenta? iniciar sesión aquí</h5>
                </Link>
            </div>
        )
    }
} 