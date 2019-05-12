import React, {Component} from "react";
import UserCredentials from "./UserCredentials.jsx"
import axios from "axios";

export default class SignIn extends Component{
   
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            status: "" //authenticated, invalid username, authentication failed 
        };
    }

    handleInputUser = (event) => {
        this.inputUserName = event.target.value;
    }

    handleInputPassword = (event) => {
        this.inputPassword = event.target.value;
    }

    handleAuthentication = () => {
        this.setState({
            username: this.inputUserName,
            password: this.inputPassword
        }, 
        ()=> { 
            console.log(this.state.username+" "+this.state.password);
            axios.post('/api/users/authenticate', this.state)
            .then((response) => {
              console.log(response);
              let signInStatus = "";
              console.log("Response from API...."+ signInStatus);
              if(response.data == "User Authenticated") 
                signInStatus = "Sign In successfull!"
            else if(response.data == "User does not exist")
                signInStatus = "Invalid username"
            else if (response.data == "Authentication failed")
                signInStatus = "Invalid password. Try again!"  
            
            console.log("Status update: "+ signInStatus);
            this.setState({status: signInStatus});
          })
            .catch((error) => {
              console.log(error);
              //Perform action based on error
            });
        });
    }

    render(){
        return (<UserCredentials handleInputUser = {this.handleInputUser} handleInputPassword = {this.handleInputPassword} handleAuthentication = {this.handleAuthentication} signInStatus = {this.state.status} />);
    } 
}