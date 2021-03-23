import React from 'react';
import getId from '../../Utils/getId';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import UpdatePasswordContainer from '../../Components/UpdatePassword/UpdateContainer';
import UserApi from '../../Api/User';
import optionsToast from '../../Utils/getOptionsToast';

export default class UpdatePassword extends React.Component{
    constructor(props){
        super(props);
        this.apiUser = new UserApi();
        this.state ={
            isLoading : false,
            status:undefined,
            message:undefined,
            form:{
                'id':getId(this.props),
                'contraseña':'',
                'recontraseña':''
            }
        }
        document.title = "Cambiar Contraseña App Notes"
    }

    getElement = (className) =>{
        return document.querySelector(className);
    }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            },
        });
    };

    fetchData = async () =>{
        try{
            let response = await this.apiUser.changePassword(this.state.form);
            this.setState({
                status:response.status,
                message:response.message,
                isLoading:false
            });
            let formUpdate = this.getElement('#formUpdate');
            let containerUpdate = this.getElement('.container-update');

            if(!this.state.status)
                toast.error(this.state.message,optionsToast)
            else{
                containerUpdate.style.height = "55%";
                formUpdate.remove();
                toast.success(this.state.message,optionsToast)
            }
        }catch(error){
            console.log(error);
        }
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        this.setState({isLoading:true});
        this.fetchData();

    }

    render(){
        return(
            <main className="main">
                <ToastContainer />
                <UpdatePasswordContainer 
                    onChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    formData={this.state.form}
                    status={this.state.status}
                    message={this.state.message}
                    isLoading={this.state.isLoading}/>
                 
            </main>
        )
    }
}