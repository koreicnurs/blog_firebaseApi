import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState();

    const getPosts = async () => {
        try {
            const response = await axios(`https://bn-task-63-default-rtdb.europe-west1.firebasedatabase.app/posts.json`);
            const postsArray = [];
            if (response.data) {
                for (let key of Object.entries(response.data)){
                    postsArray.push({
                        id: key[0],
                        title: key[1].post.title,
                        description: key[1].post.description,
                        day: key[1].post.day
                    });
                }
            }
            setPosts(postsArray);
        } catch (e) {
            console.log(e);
        }
    };

    
    useEffect(() => {
        getPosts().catch();
    }, []);
    
    return posts && (
        <>
            <div className='blog'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="add">Add</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
            </div>

            <div className='posts'>
                {posts.map(p => {
                    return (
                        <div className='post' key={p.title}>
                            <p>Created on: {p.day}</p>
                            <h3>{p.title}</h3>
                            <NavLink to={`posts/${p.id}`}>More >></NavLink>
                        </div>
                    )
                })}
            </div>
        </>

    );
};

export default Blog;