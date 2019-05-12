import React, {Component} from "react";
import DisplayList from "./DisplayList.jsx"

export default class ToDoList extends Component
{
    constructor()
    {
        super();
        this.state={
						list: [],
						newItem: '' 
        };
    }

    handleListInput = (event) => {
				this.newItem = event.target.value;		
				this.setState({newItem: this.newItem});
    }

    handleListChange = () => {
				if(this.state.newItem != '')
          this.setState({list:[...this.state.list,this.newItem], newItem: ''})
    }

    render(){
        return <DisplayList list = {this.state.list} handleListChange = {this.handleListChange} handleListInput={this.handleListInput} newItem={this.state.newItem}></DisplayList>;
    }

}
