import React, {useState} from 'react';
import Form from "../../components/Form/Form";
import axiosApi from "../../axiosApi";
import {useEffect} from "react";
import dayjs from "dayjs";
import {useHistory} from "react-router-dom";

const EditForm = ({match}) => {

    const history = useHistory();

    const [post, setPost] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        const getDataPost = async () => {
            const response = await axiosApi(`/posts/${match.params.id}.json`);
            setPost(response.data.post)
        };

        getDataPost().catch();

    }, [match.params.id]);

    const onChangeInput = e => {
        const {name, value} = e.target;

        setPost(prev => ({
            ...prev,
            [name]: value,
            day: dayjs(new Date()).format('DD-MM-YYYY hh-mm'),
        }));
    };

    const editPost = async (e) => {
        e.preventDefault();
        try {
            await axiosApi.put(`/posts/${match.params.id}.json`, {'post': post});
        } catch (e) {

        } finally {
            history.push('/');
        }
    };

    return (
        <Form
            formSubmit={editPost}
            inputName='title'
            inputValue={post.title}
            changeInputForm={onChangeInput}
            name='description'
            value={post.description}
            textOnChangeTextArea={onChangeInput}
            btnType='submit'
            btnName='Edit'
        />
    );
};

export default EditForm;