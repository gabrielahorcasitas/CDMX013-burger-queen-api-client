import axios from "axios"

function getData(link){
    return axios
                .get(link)
                .then((response) => {
                    return response.data
                })
}

export default getData;