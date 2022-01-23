import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import css from './UsersPage.module.css'
import {userService} from "../../services/user.service";
import User from "../../components/User/User";



const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={css.container}>

            <div>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
            <div className={css.userDiv}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;