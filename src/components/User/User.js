import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id} = user
    return (
        <div>
            <h4> {user.id}) -- Name: {user.name}</h4>
            <Link to={id.toString()} state={user}>
                <button>Details</button>
            </Link>
            <hr/>
        </div>
    );
};

export default User;