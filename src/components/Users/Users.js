import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/User.services";
import User from "../User/User";


const Users = () => {

    const [users, setUsers] = useState([])
    const [resalt, setResalt] = useState([])
    const [form, setForm] = useState({name: '', username: '', email: ''})

    useEffect(() => {
        userServices.getAll()
            .then(value => setUsers(value))
    }, [])

    const find = (e) => {
        e.preventDefault()
        console.log(form);
        // users.filter(value => {
        //     if (value.name.includes(e.target.name.value)) {
        //         setResalt(value=>value);
        //         console.log(resalt);
        //     }
        // })
    }
    const formHendler = (e) => {
        const keyName = e.target.name;
        setForm({...form, [keyName]: e.target.value})
    }

    return (
        <div>
            <div>
                <form onSubmit={find}>
                    Name: <input type='text' name={'name'} onChange={formHendler}/>
                    User name: <input type='text' name={'username'} onChange={formHendler}/>
                    Email: <input type='text' name={'email'} onChange={formHendler}/>
                    <button>Find</button>
                </form>
            </div>
            <div>
                {users.map(value => <User key={value.id}
                                          value={value}/>)}
            </div>
        </div>
    );
};

export default Users;