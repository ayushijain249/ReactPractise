import React from "react";

const DisplayName = (props) => (
    
    <div> Hello {props.name} 
        <p>Would you like to change this Name? </p>
        <p>Tell me a new Name :</p><br></br>
        <input type="text" name="name" onChange={props.handleInput}></input>
        <button onClick = {props.handleChange}> Change Name </button>
    </div> 

    );

export default DisplayName;