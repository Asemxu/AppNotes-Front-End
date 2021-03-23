import React from 'react';
import { Link } from 'react-router-dom';
import imgApp from '../../Images/notes.svg';
import FormLogin from './FormLogin';
import Loader from '../Loader/Loader';
export default class LoginContainer extends React.Component{
    
    render(){
        return(
            <div className="container-login">
                <div className="container-header">
                    <img src={imgApp} alt="Logo"/>
                    <h2>AppNotes</h2>
                    <h5>Tu Aplicación para registrar tus notas</h5>
                </div>
                {!this.props.isLoading &&
                    <FormLogin 
                    modal={this.props.modal}
                    onSubmit={this.props.onSubmit}
                    onChangeLogin={this.props.onChangeLogin}
                    formData={this.props.formData}/>
                }
                {this.props.isLoading &&
                    <div className="container-body-loader">
                        <Loader/>
                    </div>
                }

                <Link to="/registro" className="d-block link-registrate">
                    <h5>No tienes una cuenta? regístrate aquí</h5>
                </Link>
            </div>
        )
    }
}