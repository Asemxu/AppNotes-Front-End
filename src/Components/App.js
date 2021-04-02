import './App.css';
import  { Switch , Route , BrowserRouter  } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Pages/Login/Login';
import React from 'react';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home';
import UpdatePassword from '../Pages/UpatePassword/UpdatePassword';
import ActivateConfirmated from '../Pages/ActivaciónConfirmada/Activación';
import Perfil from '../Pages/Perfil/Perfil';
import NotFound from '../Pages/NotFound/NotFound';
import LayoutHome from '../Layout/LayoutHome';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        isLogued: JSON.parse(localStorage.getItem("isLogued")) || false 
    }
  }

  handleIsLogued = (loguedData) =>{
    this.setState({isLogued:loguedData})
    localStorage.setItem('isLogued',loguedData);
  }

  render(){
    return (
      <BrowserRouter>
        <Layout isLogued={this.handleIsLogued}>
              {!this.state.isLogued &&
                <Switch>
                  <Route exact path="/actualizar-contraseña/:id" component={UpdatePassword}/>
                  <Route exact path="/activacion-confirmada/:id" component={ActivateConfirmated}/>
                  <Route exact path="/" component={Login} />   
                  <Route exact path="/registro" component={Register} />     
                </Switch> 
              }
               {this.state.isLogued &&
                <LayoutHome>
                  <Switch>
                    <Route exact path="/Perfil" component={Perfil} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                  </Switch> 
                </LayoutHome>
              }
        </Layout>
      </BrowserRouter>
    );
  }
}


