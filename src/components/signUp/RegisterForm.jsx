import React from "react";

const RegisterForm = (props) => (
    <div>
    Name:
    <input type="text" name="name" onChange={props.handleName} placeholder= "Name"/><br/>
    Email:
    <input type="email" name="email" onChange= {props.handleEmail} placeholder= "Email"/><br/>
    Phone Number:
    <input type="number" name="phone" onChange= {props.handlePhone} placeholder= "Phone Number"/><br/>
    Username:
    <input type="text" name="username" onChange= {props.handleUserName} placeholder= "Username"/><br/>
    Password:
    <input type="password" name="password" onChange= {props.handlePassword} placeholder= "Password"/><br/>
    <button name="register" onClick={props.handleSignUp}>Register</button>
    </div>
);

export default RegisterForm; 
