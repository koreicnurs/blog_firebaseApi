import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink, useHistory} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";

const FullPost = ({match}) => {

    const [fullPost, setFullPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        const getDataPost = async () => {
            const response = await axiosApi(`/posts/${match.params.id}.json`);
            setFullPost(response.data.post)
        };

        getDataPost().catch();
        setLoading(false)

    }, [match.params.id]);

    const deletePost = async (id) => {
        setLoading(true)
        try {
            if (id === match.params.id) {
                await axiosApi.delete(`/posts/${match.params.id}.json`);
            }
        } finally {
            setLoading(false)
            history.push('/')
        }
    }

    return loading ? (<Spinner/>) :
        fullPost && (
            <>
                <NavLink to='/'>Home</NavLink>

                <div className='post'>
                    <p>{fullPost.day}</p>
                    <p>{fullPost.title}</p>
                    <p>{fullPost.description}</p>
                    <button type='button' onClick={e => deletePost(match.params.id)}>Delete</button>
                    <NavLink to={`/posts/${match.params.id}/edit`}>Edit</NavLink>
                </div>
            </>

    );
};

export default FullPost;