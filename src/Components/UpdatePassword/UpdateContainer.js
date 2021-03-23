import React from 'react';
import FormUpdate from './formUpdate';
import imgApp from '../../Images/notes.svg';
import { Link } from 'react-router-dom'
import imgCheck from '../../Images/check.svg';
import Loader from '../Loader/Loader';
export default class UpdateContainer extends React.Component{
    render(){
        return(
            <div className="container-update">
                <div className="container-update-header">
                    <img src={imgApp} alt="Logo"/>
                    <h2>AppNotes</h2>
                    <h5>Tu Aplicación para registrar tus notas</h5>
                </div>
                {!this.props.isLoading &&
                  <FormUpdate 
                    onChange={this.props.onChange}
                    onSubmit={this.props.onSubmit}
                    formData={this.props.formData}/>
                }
                {this.props.isLoading &&
                    <div className="loader-container">
                        <Loader />
                    </div>
                }

                {this.props.status &&
                    <div className="container-update-body">
                        <img src={imgCheck} alt="Imagen check" />
                        <h4>{this.props.message}</h4>
                    </div>
                }
              

                <Link to="/" className="d-block link-update">
                    <h5>Ir al Inicio </h5>
                </Link>
            </div>
        )
    }
}