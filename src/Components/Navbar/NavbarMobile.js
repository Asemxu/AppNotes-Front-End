import React from 'react';
import imgApp from '../../Images/notes.svg';
import Tooltip from 'react-power-tooltip'
import imgSalir from '../../Images/salir.svg';
import imgPerfil from '../../Images/perfil.svg';

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
                        <div className="item-perfil">
                            {this.props.userData.avatar !== "" &&
                                <img src={this.props.userData.avatar} alt="imagen Perfil"/>
                            }
                            {this.props.userData.avatar === "" &&
                                <img src={imgPerfil} alt="imagen Perfil"/>
                            }
                            <h5>{this.props.userData.nombres} {this.props.userData.apellidos}</h5>
                        </div>
                        <span></span>
                        <div className="item">
                            <img src={imgPerfil} alt="imagen Detalle Perfil"/>
                            <h6>Ver Perfil</h6>
                        </div>
                        <span></span>
                        <div className="item" onClick={ () => {
                            this.setState({showMenu:false});
                            this.props.modal();
                            }}>
                            <img src={imgSalir} alt="imagen Salir"/>
                            <h6>Cerrar Sesión</h6>
                        </div>
                    </Tooltip> 
                </div>
            </React.Fragment>
        )
    }
}