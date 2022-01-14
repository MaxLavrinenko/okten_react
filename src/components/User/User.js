import React from 'react';

import './User.css'

const User = ({value}) => {
    return (
        <div className={'userDiv'}>
            <h5> Id: {value.id} -- Name:{value.name} -- User Name: {value.username} -- email: {value.email}</h5>
        </div>
    );
};

export default User;