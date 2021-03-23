import React from 'react';
import MensajeRespuestaContainer from './MensajeRespuestaContainer';

export default class ActivacionContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
               <MensajeRespuestaContainer 
                status={this.props.status}
                message={this.props.message}/>
            </React.Fragment>
        )
    }
}