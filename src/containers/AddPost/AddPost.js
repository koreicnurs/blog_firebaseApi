import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";
import Form from "../../components/Form/Form";
import Spinner from "../../UI/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";

const AddPost = ({history}) => {

    const [post, setPost] = useState( {
        title: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);

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
        setLoading(true)
        try {
            await axiosApi.post('/posts/add.json', {
                post,
            });
        } finally {
            setLoading(false)
            history.push('/');
        }
    };

    return loading ? (<Spinner/>) :(
        <>
            <NavBar/>

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
        </>

    );
};

export default AddPost;