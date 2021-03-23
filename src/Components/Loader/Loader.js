import React from 'react';
import './styles.css';

export default class Loader extends React.Component{
    render(){
        return(
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    };
}