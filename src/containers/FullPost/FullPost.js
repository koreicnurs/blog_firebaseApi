import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink, useHistory} from "react-router-dom";

const FullPost = ({match}) => {

    const [fullPost, setFullPost] = useState(null);

    const history = useHistory()

    useEffect(() => {
        const getDataPost = async () => {
            const response = await axiosApi(`/posts/${match.params.id}.json`);
            setFullPost(response.data.post)
        };

        getDataPost().catch();

    }, [match.params.id]);

    const deletePost = async (id) => {
        try {
            if (id === match.params.id) {
                await axiosApi.delete(`/posts/${match.params.id}.json`);
            }
        } finally {
            history.push('/')
        }
    }

    return fullPost && (
        <div className='post'>
            <p>{fullPost.day}</p>
            <p>{fullPost.title}</p>
            <p>{fullPost.description}</p>
            <button type='button' onClick={e => deletePost(match.params.id)}>Delete</button>
            <NavLink to={`/posts/${match.params.id}/edit`}>Edit</NavLink>
        </div>
    );
};

export default FullPost;