import React from 'react';
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/TextArea/TextArea";
import Button from "../../UI/Button/Button";
import './Form.css';

const Form = props => {
    return (
        <form className='form' onSubmit={props.formSubmit}>
            <Input
                name={props.inputName}
                value={props.inputValue}
                changeInput={props.changeInputForm}
            />
            <TextArea
                name={props.name}
                value={props.value}
                onChangeTextArea={props.textOnChangeTextArea}
            />
            <Button
                classType='info'
                type={props.btnType}
                name={props.btnName}
            />
        </form>
    );
};

export default Form;