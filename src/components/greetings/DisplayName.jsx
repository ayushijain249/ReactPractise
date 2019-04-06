import React from "react";
import styled from "styled-components"

const WelcomeMessage = styled.div`
    color: red;
    font-size: 20px; 
`;

const PromptForChange = styled.p`
    color: blue;
    font-size: 18px;
`;

const InputName = styled.input`
    border: 5px solid gray;
    padding: 15px;
    background: #ccff99;  
    font-size: 18px;
`;

const ChangeNameButton = styled.button`
    border: 5px solid gray;
    padding: 15px;
    background: #99cc00;
    font-size: 18px;

    &:hover{
        background: #394d00;
        color: white
    }
`;

const DisplayName = (props) => (
    
    <WelcomeMessage> Hello {props.name} 
        <PromptForChange>Would you like to change this Name? </PromptForChange>
        <PromptForChange>Tell me a new Name :</PromptForChange><br></br>
        <InputName type="text" name="name" onChange={props.handleInput}></InputName>
        <ChangeNameButton onClick = {props.handleChange}> Change Name </ChangeNameButton>
    </WelcomeMessage> 

    );

export default DisplayName;