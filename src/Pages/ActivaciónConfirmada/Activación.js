import React from 'react';
import './styles.css'
import Loader from '../../Components/Loader/Loader';
import UserApi from '../../Api/User';
import ActivacionContainer from '../../Components/Activacion/ActivcacionContatiner';
import getId from '../../Utils/getId';

export default class Activacion extends React.Component{
    constructor(props){
        super(props);
        this.userApi = new UserApi();
        this.state = {
            isLoading : true,
            status : undefined,
            message : undefined
        }
        document.title = "Activación de Cuenta"
    }

    componentDidMount() {
        this.fetchData(getId(this.props));   
    }

    fetchData= async (uid) =>{
        console.log(uid);
        try{
            let response = await this.userApi.activatedAccount(uid);
            console.log(response);
            this.setState({
                isLoading:false,
                status:response.status,
                message:response.message
            });
        }catch(error){
            console.log(error);
        }
    }
    render(){
        return(
            <main className="main">
                {this.state.isLoading &&
                   <React.Fragment>
                        <h1>Cargando</h1>
                        <Loader />
                   </React.Fragment>
                }
                {!this.state.isLoading &&
                    <ActivacionContainer 
                        status={this.state.status}
                        message={this.state.message}/>
                }
            </main>
        )
    }
}