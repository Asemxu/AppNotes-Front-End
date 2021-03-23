import React from 'react';
import './styles.css';
import optionsToast from '../../Utils/getOptionsToast';
import { ToastContainer, toast } from 'react-toastify';
import RegistroContainer from '../../Components/Registro/RegistroContainer';
import ApiUser from '../../Api/User';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.apiUser = new ApiUser();
        this.state = {
            isLoading:false,
            form:{
                'nombres':'',
                'apellidos':'',
                'correo':'',
                'contraseña':'',
                'recontraseña':'',
            }
        }
        document.title = "Registro App Notes"
    }

    onSubmit = e =>{
        e.preventDefault();
        this.setState({isLoading:true})
        this.fetchData();
    }

    fetchData = async () =>{
        try{
            let response = await this.apiUser.registrarUser(this.state.form);
            this.setState({isLoading:false});
            if(!response.status){
                toast.error(response.message,optionsToast);
            }else{
                toast.success(response.message,optionsToast);
                this.intervalId = setInterval(this.redirect,5000);
            }
        }catch(error){
            console.log(error.message);
        }
    }

    redirect = () =>{
        this.props.history.push('/');
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            },
        });
    };


    render(){
        return(
            <main className="main">
                <RegistroContainer
                    onChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    formData={this.state.form}
                    isLoading={this.state.isLoading}
                />
                <ToastContainer/>
            </main>
        )
    }
}