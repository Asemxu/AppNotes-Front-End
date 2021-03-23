import React from 'react';


export default class Layout extends React.Component{
    
    componentDidMount(){
        this.intervalId = setInterval(this.getIsLogued, 3000);
        
    }

    getIsLogued = () =>{
        this.props.isLogued(JSON.parse(localStorage.getItem("isLogued")) || false );
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }


    render(){
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}