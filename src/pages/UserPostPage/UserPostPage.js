import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {userService} from "../../services/user.service";
import Post from "../../components/Post/Post";

const UserPostPage = () => {
    const {id} = useParams();
    const [posts, setPost] = useState([]);

    useEffect(()=>{
        userService.getUserPosts(id).then(value => setPost(value))
    },[]);

    return (
        <div>
            <div>
                {posts.map(value => <Post key={value.id} value={value}/>)}
            </div>
        </div>
    );
};

export default UserPostPage;