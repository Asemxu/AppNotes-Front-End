import React from 'react';
import imgApp from '../../Images/notes.svg';
import imgSalir from '../../Images/salir.svg';
import Tooltip from 'react-power-tooltip'
import imgPerfil from '../../Images/perfil.svg';
import imgAjustes from '../../Images/ajuste.svg';

export default class NavbarDesktop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu:false
        }
    }
    setShowMenu = () =>{
        this.state.showMenu ? this.setState({showMenu:false,isActive:''}) : this.setState({showMenu:true,isActive:'isActive'})
    }
    render(){
        return(
            <div className="navbar">
                <div className="navbar-header">
                    <img src={imgApp} alt="App Notes"/>
                    <h2>AppNotes</h2>
                </div>
                <div className="navbar-body">
                    <div className="user-perfil d-flex">
                        {this.props.userData.avatar !== "" &&
                            <img className= "img-perfil" src={this.props.userData.avatar} alt="imagen Perfil"/>
                        }
                        {this.props.userData.avatar === "" &&
                            <img className= "img-perfil" src={imgPerfil} alt="imagen Perfil"/>
                        }
                        <h5>{this.props.userData.nombres} {this.props.userData.apellidos}</h5>
                        <img className="ajustes" onClick={this.setShowMenu} src={imgAjustes} alt="imagen Ajustes" />
                        <img className="salir"  onClick={this.props.modal} src={imgSalir} alt="imagen salir" />
                        <Tooltip show={this.state.showMenu}
                        arrowAlign="end"
                        position="bottom right"
                        lineSeparated>
                           <div className="item">
                                <img src={imgPerfil} alt="imagen Detalle Perfil"/>
                                <h6>Ver Perfil</h6>
                            </div>
                    </Tooltip> 
                    </div>
                </div>
            </div>
        )
    }
}