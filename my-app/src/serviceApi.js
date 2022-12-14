import axios from "axios"

const urlUsers = 'https://6372d80a348e947299fdd17b.mockapi.io/users'
const urlProducts = 'https://6372d80a348e947299fdd17b.mockapi.io/products'
const urlOrders = "https://6372d80a348e947299fdd17b.mockapi.io/orders";

export function getData(link){
    return axios
                .get(link)
                .then((response) => {
                    return response.data
                })
}

export function getUsers(){
    return axios.get(urlUsers)
}

export function deleteOneProduct(id){
    return axios
    .delete(
        urlProducts + `/${id}`
    )
}