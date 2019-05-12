import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Greetings from "./components/greetings/index.jsx"
import ToDo from "./components/toDoList/index.jsx"
import SignIn from "./components/signIn/index.jsx"
import SignUp from "./components/signUp/index.jsx"

const App = () => (
    <Router>
        <NavBar/>
        <Switch>
            <Route path="/" exact render={()=><h1>This is home</h1>} />
            <Route path="/greetings" component={Greetings} />
            <Route path="/todo" component={ToDo} />
            <Route path="/signIn" component={SignIn} /> 
            <Route path="/signUp" component={SignUp} /> 
        </Switch>
    </Router>
);

export default App;