import Image from 'react-bootstrap/Image'
import placeholderImg from "../../images/placeholder_img_alt.jpg"
import { useParams } from 'react-router'
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { formatDateForArticle } from "../../utils/formatting";
import { Votes } from "../sub-components/Votes";
import Comments from "../sub-components/Comments";

function Article () {
    const [article, setArticle] = useState(null);
    const [isNoArticlesFound, setIsNoArticlesFound] = useState(false);

    const articleId = useParams().article;

    useEffect(() => {
        setIsNoArticlesFound(false)
        
        getArticleById(articleId).then((articleData)=>{
            setArticle(articleData);
        }).catch(()=> {
            setIsNoArticlesFound(true)
        })
    }, [articleId])

    if(isNoArticlesFound) {
        return <h2 className="m-4 text-center">404 Article Not Found</h2>;
    }

    if(article === null) {
        return null
    }

    return <section className="--article-width m-auto">

            <p className="text-capitalize article-topic">{article.topic}</p>

            <h2 className="article-title">{article.title}</h2>
            <p className="article-sub-heading">By {article.author}</p>
            <p className="article-sub-heading --date-formatting">{formatDateForArticle(article.created_at)}</p>

            <Image src={placeholderImg} fluid></Image>
            <p className="article-image-caption">| Caption for above image</p>

            <p className="article-body">{article.body}</p>
            <Votes article={article}/>
            <Comments articleId={articleId}/>
    </section>
}

export default Article;