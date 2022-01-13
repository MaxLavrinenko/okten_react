import React from 'react';

const User = ({user, getDetails}) => {
    return (
        <div>
            <h3>user ID {user.id} --- User Name: {user.name}</h3>
            <button onClick={() => getDetails(user.id)}> Details</button>
        </div>
    );
};

export default User;