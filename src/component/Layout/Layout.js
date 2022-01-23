import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default Layout;