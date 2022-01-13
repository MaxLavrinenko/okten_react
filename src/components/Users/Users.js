import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/User.services";
import User from "../User/User";


const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect (() => {
        userServices.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            { users && users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;