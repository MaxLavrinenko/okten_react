import React, {useEffect, useState} from 'react';

import css from './PostPage.module.css'
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.container}>
            <div className={css.posts}>
                <h2>Posts</h2>
                {posts.map(post => <Post key={post.id} value={post}/>)}
            </div>
            <div className={css.detail}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;