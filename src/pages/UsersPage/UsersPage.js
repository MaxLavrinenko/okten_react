import React, {useEffect, useState} from 'react';


import {userServices} from "../../services/user.services";
import User from "../../component/User/User";
import {Outlet} from "react-router-dom";
import css from './userPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={css.userList}>
            <div>
                {users.map(value => <User key={value.id} value={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;