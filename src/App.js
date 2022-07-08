import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Blog from "./containers/Blog/Blog";
import Home from "./containers/Home/Home";
import AddPost from "./containers/AddPost/AddPost";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import FullPost from "./containers/FullPost/FullPost";
import EditForm from "./containers/EditForm/EditForm";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Blog}/>
                <Route path='/posts' exact component={Blog}/>
                <Route path='/posts' exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/add" component={AddPost}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/posts/:id" exact component={FullPost}/>
                <Route path="/posts/:id/edit" component={EditForm}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;