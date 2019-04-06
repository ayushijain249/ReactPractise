import React from "react";
import styled from "styled-components"
import UnOrderedList from "../common/UnOrderedList.jsx"

const WelcomeMessage = styled.div`
    color: red;
    font-size: 20px; 
`;

const PromptForChange = styled.p`
    color: black;
    font-size: 18px;
`;

const InputName = styled.input`
    border: 1px solid gray;
    padding: 5px;
    font-size: 16px;
    margin: 2px;
`;

const AddListItem = styled.button`
    border: 1px solid gray;
    margin: 2px;
    padding: 5px;
    background: #99cc00;
    font-size: 16px;

    &:hover{
        background: #394d00;
        color: white
    }
`;


const DisplayList = (props) => (
    
    <WelcomeMessage>  
        <PromptForChange>Add item to your ToDo list : </PromptForChange>
        <InputName type="text" name="listItem" onChange={props.handleListInput} value={props.newItem}></InputName>
        <AddListItem onClick = {props.handleListChange}> ADD ITEM </AddListItem>
        <p> ToDo List </p><hr/>
        <UnOrderedList list={props.list} />
    </WelcomeMessage> 
    );

export default DisplayList;
