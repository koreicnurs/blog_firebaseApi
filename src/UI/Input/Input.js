import React from 'react';

const Input = props => {
    return (
        <input type='text'
               name={props.name}
               value={props.value}
               onChange={props.changeInput}
        />
    );
};

export default Input;