import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import ArticleItem from "../sub-components/ArticleItem";


function ArticleList () {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles().then((articlesData)=>{
            setArticles(articlesData);
            console.log(articlesData);
        })
    }, [])

    return <section>
        <ul className="article-list">
            {articles.map((article) => {
                return <ArticleItem key={article.article_id} article={article}/>
            })}
        </ul>
    </section>
}

export default ArticleList;