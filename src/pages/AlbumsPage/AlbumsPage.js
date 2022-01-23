import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";


import {userServices} from "../../services/user.services";
import Album from "../../component/Album/Album";

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userServices.getUserAlbums(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div>
                {albums.map(value => <Album key={value.id} value={value}/>)}
            </div>
        </div>
    );
};

export default AlbumsPage;