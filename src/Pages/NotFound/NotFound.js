import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import notFoundImg from '../../Images/404.png';
import arrowLeft from '../../Images/left-arrow.svg';
export default class NotFound extends React.Component{
    render(){
        return(
            <main className="main">
                <div className="card__notFound w-65">
                    <img src={notFoundImg} className="w-100" alt="Not Found Imagen"/>
                    <h3>No se encontró o se borró temporalmente la página</h3>
                    <Link to="/" className="go__home bg__green">
                        <img src={arrowLeft}  alt="arrow Left"/>
                        Ir al Home
                    </Link>
                </div>
            </main>

        )
    }
}