import React from 'react';
import {Link} from "react-router-dom";

const User = ({value}) => {

    return (
        <div>
            <h3>{value.id}) -- Name:{value.name}</h3>
            <h4> User Name: {value.username} email: {value.email}</h4>
            <Link to={`${value.id}/albums`}><button>Albums</button></Link>
        </div>
    );
};

export default User;