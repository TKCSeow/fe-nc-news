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

export function getArticleById(id){
    return newsApi(`/articles/${id}`)
        .then((response) => {
            return response.data.article;
        })
}

export function getCommentsByArticleId(id){
    return newsApi(`/articles/${id}/comments`)
        .then((response) => {
            return response.data.comments;
        })
}

export function postCommentByArticleId(articleId, userName, text){
    return newsApi.post(`/articles/${articleId}/comments`, {
        username: userName,
        body: text
    })
        .then((response) => {
            return response.data.comment;
        })
}