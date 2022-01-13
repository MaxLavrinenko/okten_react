import React from 'react';

const Post = ({post}) => {

    return (
        <div>
            <h4>User ID: {post.userId} post ID: {post.id}</h4>
            <h5>Title: {post.title}</h5>
            <p>Text: {post.body}</p>
        </div>
    );
};

export default Post;