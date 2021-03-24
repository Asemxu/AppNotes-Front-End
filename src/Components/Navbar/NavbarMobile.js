import React from 'react';
import imgApp from '../../Images/notes.svg';
import Loader from '../Loader/Loader';
import Tooltip from 'react-power-tooltip'
import imgSalir from '../../Images/salir.svg';

export default class NavbarMobile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu : false,
            isActive:''
        }
    }

    setShowMenu = () =>{
        this.state.showMenu ? this.setState({showMenu:false,isActive:''}) : this.setState({showMenu:true,isActive:'isActive'})
    }

    render(){
        return(
            <React.Fragment>
                <div className="navbar">
                    <div className="navbar-header">
                        <img src={imgApp} alt="App Notes"/>
                        <h2>AppNotes</h2>
                    </div>
                    <div className="navbar-body">
                        
                        <div className={`btn-menu ${this.state.isActive}`} 
                            onClick={this.setShowMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>     
                    </div>
                    <Tooltip show={this.state.showMenu}
                        arrowAlign="end"
                        position="bottom right"
                        lineSeparated>
                        <div><Loader/></div>
                        <span></span>
                        <div><Loader/></div>
                        <span></span>
                        <div>
                           <div className="item">
                                <img src={imgSalir} alt="imagen Salir"/>
                                <h6>Cerrar Sesión</h6>
                           </div>
                        </div>
                    </Tooltip> 
                </div>
            </React.Fragment>
        )
    }
}