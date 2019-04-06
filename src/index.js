import Greetings from "./components/greetings/index.jsx"
import ReactDom from "react-dom" 
import React from "react"
import ToDoList from "./components/toDoList/index.jsx"

//ReactDom.render(<Greetings/>,document.getElementById("app"));

ReactDom.render(<ToDoList/>,document.getElementById("app"));