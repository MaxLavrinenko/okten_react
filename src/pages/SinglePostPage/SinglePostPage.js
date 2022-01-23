import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";


import {postService} from "../../services/post.service";

const SinglePostPage = () => {

    const {id} = useParams()
    const {state} = useLocation()

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])


    return (
        <div>
            {post && (
                <div>
                    <h3>id: {post.id} User ID: {post.userId}</h3>
                    <h4> Title: {post.title}</h4>
                    <p>Text: {post.body}</p>
                    <Link to={'comments'}>
                        <button>Coments</button>
                    </Link>
                </div>
            )}
            <hr/>
            <Outlet/>
        </div>
    );
};

export default SinglePostPage;