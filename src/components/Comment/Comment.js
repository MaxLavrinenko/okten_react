import React from 'react';

const Comment = ({value}) => {
    return (
        <div>
            <h4> Name: {value.name} Comment ID: {value.id}</h4>
            <h3>From: {value.email}</h3>
            <p>Text: {value.body}</p>
            <hr/>
        </div>
    );
};

export default Comment;