import React, {useEffect, useState} from 'react';

import {userService} from "../../services/User.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import './Users.css'
import Posts from "../Posts/Posts";


const Users = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getDetails = (id) => {
        userService.getUserById(id)
            .then(value => setUser(value))
    }
    const getUserPosts = (id) => {
        userService.getUsersPosts(id)
            .then(value => setPosts(value))
    }

    return (
        <div>
            <div className={'usersContainer'}>
                <div>
                    {users.map(value => <User key={value.id} user={value} getDetails={getDetails}/>)}
                </div>
                <div>
                    {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
                </div>
            </div>
            <div>
                <Posts value={posts}/>
            </div>
        </div>
    );
};

export default Users;