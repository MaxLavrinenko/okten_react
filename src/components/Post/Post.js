import React from 'react';
import {Link} from "react-router-dom";

const Post = ({value}) => {
    const {id, title} = value;

    return (
        <div>
            <h3> {id} )--Title: {title}</h3>
            <p>Text: {value.body}</p>
            <Link to={id.toString()} state={value}>
                <button>Deteils</button>
            </Link>
            <hr/>
        </div>
    );
};

export default Post;