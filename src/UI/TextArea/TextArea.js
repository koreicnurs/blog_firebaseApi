import React from 'react';

const TextArea = props => {
    return (
        <textarea
            name={props.name}
            value={props.value}
            onChange={props.onChangeTextArea}
        />
    );
};

export default TextArea;