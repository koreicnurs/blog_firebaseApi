import React, {useEffect, useState} from 'react';
import axios from "axios";
import axiosApi from "../../axiosApi";
import {NavLink} from "react-router-dom";
import AddPost from "../../components/AddPost/AddPost";

const Blog = () => {
    const [posts, setPosts] = useState();
    // const [loading, setLoading] = useState();

    const getPosts = async () => {
        const response = await axios(axiosApi)
        setPosts(response.data);
        console.log(posts);
    };




    useEffect( () => {
        getPosts();
    }, []);

    return (
        <div className='blog'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="add">Add</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contacts">ontacts</NavLink>
        </div>
    );
};

export default Blog;