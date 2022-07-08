import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import Spinner from "../../UI/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
        setLoading(true);
        try {
            const response = await axios(`https://bn-task-63-default-rtdb.europe-west1.firebasedatabase.app/posts.json`);
            const postsArray = [];
            if (response.data) {
                for (let key of Object.entries(response.data)) {
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
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getPosts().catch();
    }, []);

    return loading ? (<Spinner/>)
        :
        posts && (
            <>
                <NavBar/>

                <div className='posts'>
                    {posts.map(p => {
                        return (
                            <div className="card" key={p.title}>
                                    <div className="card-body">
                                        <h6 className='card-text date'>Created on: {p.day}</h6>
                                        <h2 className="card-title">{p.title}</h2>
                                        <p className="card-text">{p.description}</p>
                                        <NavLink className="btn btn-primary" to={`posts/${p.id}`}>More >></NavLink>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
};

export default Blog;