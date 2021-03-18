import React from 'react';


export default class Layout extends React.Component{
    
    componentDidMount(){
        this.props.isLogued(JSON.parse(localStorage.getItem("isLogued")) || false );
    }
    render(){
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}