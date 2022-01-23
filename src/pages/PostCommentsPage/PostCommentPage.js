import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";

const PostCommentPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getComments(id).then(value => setComments(value))

    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} value={comment}/>)}
        </div>
    );
};

export default PostCommentPage;