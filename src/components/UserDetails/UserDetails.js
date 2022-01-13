import React from 'react';

const UserDetails = ({user, getUserPosts}) => {
    return (
        <div>
            <h3>User ID: {user.id} Name: {user.name} User Name: {user.username}</h3>
            <h4>Contacts: Phone: {user.phone} Email: {user.email} Website: {user.website}</h4>
            <p>Address: Street: {user.address.street} City:{user.address.city}</p> <br/>
            <p> Company name:{user.company.name}</p>
            <button onClick={() => getUserPosts(user.id)}>Get Comment</button>
        </div>
    );

};

export default UserDetails;