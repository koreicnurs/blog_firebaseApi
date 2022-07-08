import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink, useHistory} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";
import './FullPost.css';

const FullPost = ({match}) => {

    const [fullPost, setFullPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        const getDataPost = async () => {
            const response = await axiosApi(`/posts/${match.params.id}.json`);
            setFullPost(response.data.post);
        };

        getDataPost().catch();
        setLoading(false);

    }, [match.params.id]);

    const deletePost = async (id) => {
        setLoading(true);
        try {
            if (id === match.params.id) {
                await axiosApi.delete(`/posts/${match.params.id}.json`);
            }
        } finally {
            setLoading(false);
            history.push('/');
        }
    };

    return loading ? (<Spinner/>) :
        fullPost && (
            <>
                <NavLink className='nav nav-link' to='/'>Home</NavLink>

                <div className="card post">
                    <div className="card-body">
                        <h6 className='card-text date'>Created on: {fullPost.day}</h6>
                        <h2 className="card-title">Title: {fullPost.title}</h2>
                        <p>Description: {fullPost.description}</p>
                        <Button
                            classType='danger'
                            type='button'
                            name='Delete'
                            clicked={e => deletePost(match.params.id)}
                        />
                        <NavLink className="btn btn-warning" to={`/posts/${match.params.id}/edit`}>Edit</NavLink>
                    </div>
                </div>
            </>

    );
};

export default FullPost;