import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Blog from "./containers/Blog/Blog";
import Home from "./components/Home/Home";
import AddPost from "./components/AddPost/AddPost";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Blog}/>
                <Route path="/home" component={Home}/>
                <Route path="/add" component={AddPost}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;