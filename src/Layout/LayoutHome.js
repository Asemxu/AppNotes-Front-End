import React from 'react';
import NavbarMobile from '../Components/Navbar/NavbarMobile';
import NavbarDesktop from '../Components/Navbar/NavbarDesktop';
import { ToastContainer, toast } from 'react-toastify';
import optionsToast from '../Utils/getOptionsToast';
import ModalCerrarSesion from './CerrarSesion';
import UserApi from '../Api/User';


export default class LayoutHome extends React.Component{
    constructor(props){
        super(props);
        this.userApi = new UserApi();
        this.state ={
            isMobileOrDesktop:undefined,
            isLoading:true,
            userData:JSON.parse(localStorage.getItem('userData')),
            isOpenModalLogout:false,
        }
    }
    componentDidMount() {
        this.isMobileOrDesktop();
        this.intervalID = setInterval(this.isMobileOrDesktop,300);
    }

    isMobileOrDesktop = () =>{
        let width = window.innerWidth;
        if(width<=681){
            this.setState({isMobileOrDesktop:true,isLoading:false});
        }else{
            this.setState({isMobileOrDesktop:false,isLoading:false});
        }
    }
    
    openModal = () =>{
        this.setState({isOpenModalLogout:true})
    } 

    hideModal = () =>{
        this.setState({isOpenModalLogout:false})
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalIdLogout);
    }
    
    cerrarSesion = async () =>{
        this.setState({isOpenModalLogout:false});
        let { id } = this.state.userData.id;
        try{
            const response = await this.userApi.cerrarSesion(id);
            toast.success(response.message,optionsToast);
            this.intervalIdLogout = setInterval(this.clearUserInfo(), 3000);
        }catch(error){
            console.log(error);
        }
    }

    clearUserInfo = () =>{
        localStorage.clear();
    }

    render(){
        if(!this.state.isLoading){
            return(
                <React.Fragment>
                     <header className="header-home">
                        {this.state.isMobileOrDesktop &&
                            <NavbarMobile 
                                userData={this.state.userData}
                                modal={this.openModal}
                                isOpenModalLogout={this.state.isOpenModalLogout}
                                />
                        }
                        {!this.state.isMobileOrDesktop &&
                            <NavbarDesktop 
                                userData={this.state.userData}
                                modal={this.openModal}
                                />
                        }
                    </header>
                    {this.props.children}
                    {this.state.isOpenModalLogout &&
                        <div className="main-modal-cerrar-sesion">
                                <ModalCerrarSesion 
                                hide={this.hideModal}
                                cerrarSesion={this.cerrarSesion}
                                />
                        </div>
                    }
                    <ToastContainer/>
                </React.Fragment>
            )
        }else{
            return null;
        }
    }
}