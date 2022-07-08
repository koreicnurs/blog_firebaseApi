import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";
import Form from "../../components/Form/Form";

const AddPost = ({history}) => {

    const [post, setPost] = useState( {
        title: '',
        description: '',
    });

    const onChangeInput = e => {
      const {name, value} = e.target;

      setPost(prev => ({
          ...prev,
          [name]: value,
          day: dayjs(new Date()).format('DD-MM-YYYY hh-mm'),
      }));
    };

    const addPost = async (e) => {
        e.preventDefault();

        try {
            await axiosApi.post('/posts.json', {
                post,
            });
        } finally {
            history.push('/');
        }
    };

    return (
        <Form
            formSubmit={addPost}
            inputName='title'
            inputValue={post.title}
            changeInputForm={onChangeInput}
            name='description'
            value={post.description}
            textOnChangeTextArea={onChangeInput}
            btnType='submit'
            btnName='Add'
        />
    );
};

export default AddPost;