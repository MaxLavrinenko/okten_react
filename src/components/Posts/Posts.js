import React from 'react';
import Post from "../Post/Post";

const Posts = (props) => {


    return (
        <div>
            {props.value && props.value.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts