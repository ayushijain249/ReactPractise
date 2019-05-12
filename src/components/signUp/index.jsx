import React, {Component} from "react";
import RegisterForm from "./RegisterForm.jsx"
import axios from "axios";

export default class SignUp extends Component{

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            username: "",
            password: ""
        }
    }

    handleName = (event) => {
        this.inputName = event.target.value;
    }

    handleEmail =(event) => {
        this.inputEmail = event.target.value;
    }

    handlePhone = (event) => {
        this.inputPhone = event.target.value;
    }

    handleUserName = (event) => {
        this.inputUserName = event.target.value;
    }

    handlePassword = (event) => {
        this.inputPassword = event.target.value;
    }

    handleSignUp = () => {
        console.log("Inside regiter process");
        this.setState({
            name: this.inputName,
            email: this.inputEmail,
            phone: this.inputPhone,
            username: this.inputUserName,
            password: this.inputPassword
        },
        () => {
            console.log("creating users...");
            axios.post('/api/users', this.state)
            .then((response) => {
                console.log(response);
            })
            .then((error) => {
                console.log(error);
            });
        });
        
    }

    render(){
        return (<RegisterForm handleName={this.handleName} handleEmail={this.handleEmail} handlePhone={this.handlePhone} handleUserName={this.handleUserName} handlePassword={this.handlePassword} handleSignUp={this.handleSignUp}></RegisterForm>);
    }

}
