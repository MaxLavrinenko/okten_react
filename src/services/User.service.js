import {urls} from '../configs/Urls'

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getUserById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}
const getUsersPosts = (id)=>{
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
}
export const userService = {
    getAll,
    getUserById,
    getUsersPosts
}