import axios from "axios";

const instance = axios.create({
    //настройки запросов через axios
})

export const reviewsAPI = {
    getReviews() {
        return instance.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
            return response.data
        })
    },

};

