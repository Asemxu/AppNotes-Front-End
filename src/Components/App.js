import './App.css';
import  { Switch , Route , BrowserRouter  } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Pages/Login/Login';
import React from 'react';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home';
import UpdatePassword from '../Pages/UpatePassword/UpdatePassword';
import ActivateConfirmated from '../Pages/ActivaciónConfirmada/Activación';
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
            <Switch>
              {!this.state.isLogued &&
                <React.Fragment>
                  <Route exact path="/actualizar-contraseña/:id" component={UpdatePassword}/>
                  <Route exact path="/activacion-confirmada/:id" component={ActivateConfirmated}/>
                  <Route exact path="/" component={Login} />   
                  <Route exact path="/registro" component={Register} />     
                </React.Fragment> 
              }
               {this.state.isLogued &&
                <React.Fragment>
                  <Route exact path="/" component={Home} />
                  {/* <Route component={notFound} /> */}
                </React.Fragment> 
              }
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}


