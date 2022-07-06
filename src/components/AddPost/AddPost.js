import React, {useState} from 'react';
import axiosApi from "../../axiosApi";

const AddPost = ({history}) => {

    const [post, setPost] = useState( {
        name: '',
        message: '',
    });

    const onChangeInput = e => {
      const {name, value} = e.target;

      setPost(prev => ({
          ...prev,
          [name]: value,
      }));
    };

    const addPost = async (e) => {
        e.preventDefault();

        try {
            await axiosApi.post('/add.json', {
                post,
            });
        } finally {
            history.push('/');
        }

    };


    return (
        <form onSubmit={addPost}>
            <input type="text"
                   name='name'
                   value={post.name}
                   onChange={onChangeInput}
            />
            <input type="text"
                   name='message'
                   value={post.message}
                   onChange={onChangeInput}
            />
            <button type='submit'>Add</button>
        </form>
    );
};

export default AddPost;