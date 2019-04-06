import React, {Component} from "react";
import DisplayName from "./DisplayName.jsx";

export default class Greetings extends Component{
    
    constructor(){
        super();
        this.state = {
            name: "Ayushi Jain"
        };
     }

    handleInput = (event) => {
        this.newName = event.target.value 
    }
    //this.setState({proposedName: event.target.value}) // this was calling render again and again

    handleChange = () => {
        
        this.setState({name: this.newName})
    }
        //this.state.proposedName})

    render(){
        console.log("there is a change");
        return (<DisplayName name = {this.state.name} handleChange = {this.handleChange} handleInput={this.handleInput}></DisplayName>);
    }
}