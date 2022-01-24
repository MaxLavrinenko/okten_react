import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/user.services";
import {useParams} from "react-router-dom";


import Photo from "../../component/Photo/Photo";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([])
    const {idPhoto} = useParams()
    useEffect(() => {
        userServices.getPhotoBuAlbumId(idPhoto).then(value => setPhotos(value))
    }, [idPhoto])
    return (
        <div>
            {photos.map(value => <Photo key={value.id} value={value}/>)}
        </div>
    );
};

export default PhotosPage;