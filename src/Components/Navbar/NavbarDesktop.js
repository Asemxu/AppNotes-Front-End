import React from 'react';
import imgApp from '../../Images/notes.svg';

export default class NavbarDesktop extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="navbar-header">
                    <img src={imgApp} alt="App Notes"/>
                    <h2>AppNotes</h2>
                </div>
            </div>
        )
    }
}