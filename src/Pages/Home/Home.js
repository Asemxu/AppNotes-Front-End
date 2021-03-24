import React from 'react';
import './styles.css'
import NavbarMobile from '../../Components/Navbar/NavbarMobile';
import NavbarDesktop from '../../Components/Navbar/NavbarDesktop';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isMobileOrDesktop:undefined,
            isLoading:true,
        }
        document.title = "Bienvenido a App Notes"
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
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    

    render(){
        if(!this.state.isLoading){ 
            return(
                <React.Fragment>
                    <header className="header-home">
                        {this.state.isMobileOrDesktop &&
                            <NavbarMobile />
                        }
                        {!this.state.isMobileOrDesktop &&
                        <NavbarDesktop />
                        }
                    </header>
                    <main className="main-home">
                        <h1>Logueado</h1>
                    </main>
                </React.Fragment>
            
            )
        }else{
            return null
        }
    }
}