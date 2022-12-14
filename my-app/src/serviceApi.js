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

export function postOneProduct(addProducts){
    return axios.post(urlProducts, addProducts)
}

export function putOneProduct(id, addProducts){
    return axios
    .put(
        urlProducts + `/${id}`,
        addProducts
    )
}


export function deleteOneUser(id){
    return axios
    .delete(
        urlUsers + `/${id}`
    )
}

export function putOneUser(id, addPartners){
    return axios
    .put(
        urlUsers + `/${id}`,
        addPartners
    )
}

export function postOneUser(addPartners){
    return axios.post(urlUsers,(addPartners))
}

export function putOneOrder(id, updateOrder){
    return axios
    .put(
        urlOrders + `/${id}`,
        updateOrder
    )
}

export function postOneOrder(newOrder){
    return axios.post(urlOrders,(newOrder))
}