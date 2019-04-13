import React from "react"
import {Link} from "react-router-dom"
import UnOrderedList from "./common/UnOrderedList.jsx"

const list= [<Link to="/">Home</Link>,<Link to="/greetings">Greetings</Link>,<Link to="/todo">ToDo</Link>]

const NavBar = () => (
    <UnOrderedList list ={list} /> 
);

export default NavBar;