import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://tim-nc-news.cyclic.app/api"
})

export function getArticles(topic, sortBy, order){
    return newsApi(`/articles`, {
        params: { topic , "sort_by" : sortBy, order}
    })
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

export function patchArticleVotes(id){

    return newsApi.patch(`/articles/${id}`, {
        inc_votes: 1,
      })
        .then((response) => {
            console.log(response.data)
            return response.data.article;
        })
}

export function getCommentsByArticleId(id){
    return newsApi(`/articles/${id}/comments`)
        .then((response) => {
            return response.data.comments;
        })
}

export function getComments(author){
    return newsApi(`/comments`, {params: {author}})
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

export function getUsers(){
    return newsApi(`/users`)
        .then((response) => {
            return response.data.users;
        })
}

export function getTopics(){
    return newsApi(`/topics`)
        .then((response) => {
            return response.data.topics;
        })
}

export function deleteComment(commentId){
    return newsApi.delete(`/comments/${commentId}`)
        .then((response) => {
            return response.status;
        })
}