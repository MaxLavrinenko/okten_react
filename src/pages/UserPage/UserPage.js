import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";


import {userService} from "../../services/user.service";


const UserPage = () => {
    const {id} = useParams()
    const {state} = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div>
            {user && (
                <div>
                    <h3>User Name: {user.name} UserName: {user.username} Email: {user.email}</h3>
                    <h4> Address: street: {user.address.street} city: {user.address.city}</h4>
                    <h5>GEO: lat:{user.address.geo.lat} lng:{user.address.geo.lng}</h5>
                    <Link to={'posts'}>
                        <button> User post</button>
                    </Link>
                    <hr/>

                </div>
            )}
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default UserPage;