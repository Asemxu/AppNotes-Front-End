import React from 'react';
import './styles.css'


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        }
        document.title = "Bienvenido a App Notes"
    }


    render(){
        return(
            <React.Fragment>
                <div className="home">
                    <h1>Logueado</h1>
                </div>                 
            </React.Fragment>
        )
    }
}