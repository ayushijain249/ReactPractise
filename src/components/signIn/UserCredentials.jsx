import React from "react";

const UserCredentials = (props) => (
    <div>
        <p>{props.signInStatus}</p>
        <input type="text" name="username" onChange= {props.handleInputUser} placeholder= "UserName"/><br/>
        <input type="password" name="password" onChange= {props.handleInputPassword} placeholder= "Password"/><br/>
        <button name="signIn" onClick={props.handleAuthentication}>Sign In</button>
    </div>
);

export default UserCredentials; 