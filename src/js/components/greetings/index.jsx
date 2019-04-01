import React, {Component} from "react";
import DisplayName from "./DisplayName.jsx";

export default class Greetings extends Component{
        
    constructor(){
        super();
        this.state = {
            name: "Ayushi Jain",
            proposedName: ""
        };
     }

    handleInput = (event) => this.setState({proposedName: event.target.value})

    handleChange = () => this.setState({name: this.state.proposedName})

    render(){
        console.log("there is a change");
        return (<DisplayName name = {this.state.name} handleChange = {this.handleChange} handleInput={this.handleInput}></DisplayName>);
    }
}