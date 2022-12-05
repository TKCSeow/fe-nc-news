import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://tim-nc-news.cyclic.app/api"
})

export function getArticles(){
    return newsApi("/articles")
        .then((response) => {
            return response.data.articles;
        })
}