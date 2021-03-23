import React from 'react';
import './styles.css';
import LoginContainer from '../../Components/Login/LoginContainer';
import ModalRecuperarContraseña from '../../Components/Login/RecuperarContraseña';
import optionsToast from '../../Utils/getOptionsToast';
import { ToastContainer, toast } from 'react-toastify';
import ApiUser from '../../Api/User';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.apiUser = new ApiUser();
        this.state = {
            isOpenModal : false,
            isLoading:false,
            status:undefined,
            formModal:{
                'correo':''
            },
            formLogin :{
                'correo':'',
                'contraseña':''
            }
        }
        document.title = "Inicio Sesión App Notes";
    }

    getElement = (className) =>{
        return document.querySelector(className);
    }

    openModal = () =>{
        this.setState({isOpenModal:true})
    } 

    hideModal = () =>{
        this.setState({
            isOpenModal:false,
            status:false,
            formModal : {
                'correo':''
            }
        })
    }

    handleChangeModal = e =>{
        this.setState({
            formModal:{
                ...this.state.formModal,
                [e.target.name] : e.target.value,
            },
        });
    };

    handleChangeLogin = e =>{
        this.setState({
            formLogin:{
                ...this.state.formLogin,
                [e.target.name] : e.target.value,
            },
        });
    };

    onSubmitLogin = (e) =>{
        e.preventDefault();
        this.setState({isLoading:true});
        this.fetchData('Login');
    }

    onSubmitEmail = (e) =>{
        e.preventDefault();
        this.setState({isLoading:true});
        this.fetchData("Email")
    }

    fetchData = async (type) =>{
       switch (type){
           case "Email":
                this.sendEmail();
                break;
            case "Login":
                this.login();
                break;
            default:
                break;
       }
    }

    login = async () =>{
        try{
            let response = await this.apiUser.loginUser(this.state.formLogin);
            this.setState({isLoading:false,status:response.status});
            if(!response.status){
                toast.error(response.message,optionsToast);
            }else{
                toast.success(response.message,optionsToast);
                this.intervalId = setInterval(this.setLogued(response.user), 3000);
            }
        }catch(error){
            console.log(error);
        }
    }

    setLogued = (userData) =>{
        localStorage.setItem('isLogued',true);
        localStorage.setItem('userData',JSON.stringify(userData));
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    sendEmail = async () =>{
        try{
            let response = await this.apiUser.sendEmailChangePassword(this.state.formModal.correo);
            this.setState({isLoading:false,status:response.status});
            if(!response.status){
                toast.error(response.message,optionsToast);
            }else{
                toast.success(response.message,optionsToast);
            }
        }catch(error){
            console.log(error);
        }
    }

    render(){
        return(
            <main className="main">
                <LoginContainer 
                    modal={this.openModal}
                    onSubmit={this.onSubmitLogin}
                    formData={this.state.formLogin}
                    onChangeLogin={this.handleChangeLogin} 
                    isLoading={this.state.isLoading}/> 
                {this.state.isOpenModal &&
                    <ModalRecuperarContraseña 
                        onSubmit={this.onSubmitEmail}
                        onChangeModal={this.handleChangeModal}
                        modal={this.hideModal}
                        isLoading={this.state.isLoading}
                        status={this.state.status}
                        formData={this.state.formModal}/>
                }
                <ToastContainer />
            </main>
        )
    }
}

