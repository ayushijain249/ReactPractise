import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Greetings from "./components/greetings/index.jsx"
import ToDo from "./components/toDoList/index.jsx"

const App = () => (
    <Router>
        <NavBar/>
        <Switch>
            <Route path="/" exact render={()=><h1>This is home</h1>} />
            <Route path="/greetings" component={Greetings} />
            <Route path="/todo" component={ToDo} />
        </Switch>
    </Router>
);

export default App;