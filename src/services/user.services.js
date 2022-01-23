import {axiosServices} from "./axios.services";
import {baseURL, urls} from "../configs/urls";

export const userServices = {
    getAll: () => axiosServices.get(urls.users).then(value => value.data),
    getPhotoBuAlbumId: (id) => axiosServices.get(`${baseURL}photos?albumsId${id}`).then(value => value.data),
    getUserAlbums: (id) => axiosServices.get(`${urls.users}/${id}/albums`).then(value => value.data)
}
