import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/User.services";
import User from "../User/User";


const Users = () => {

    const [users, setUsers] = useState([])
    const [form, setForm] = useState({name: '', username: '', email: ''})
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        userServices.getAll()
            .then(value => {
                setFilter(value);
                setUsers(value)
            })
    }, [])

    const find = (e) => {
        e.preventDefault()
        setFilter(
            users.filter(value => {
                return (value.name.toLowerCase().includes(form.name) &&
                    value.username.toLowerCase().includes(form.username) &&
                    value.email.toLowerCase().includes(form.email));

            }))
    }
    const formHandler = (e) => {
        const keyName = e.target.name;
        setForm({...form, [keyName]: e.target.value})
    }

    return (
        <div>
            <div>
                <form onSubmit={find}>
                    Name: <input type='text' name={'name'} onChange={formHandler}/>
                    User name: <input type='text' name={'username'} onChange={formHandler}/>
                    Email: <input type='text' name={'email'} onChange={formHandler}/>
                    <button>Find</button>
                </form>
            </div>
            <div>
                {filter.map(value => <User key={value.id} value={value}/>)}
            </div>
        </div>
    );
};

export default Users;