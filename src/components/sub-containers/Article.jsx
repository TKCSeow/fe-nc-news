import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import placeholderImg from "../../images/placeholder_img.jpg"
import {Routes, Route, useParams} from 'react-router'
import { useContext } from "react";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { formatDateForArticle } from "../../utils/formatting";
import { Votes } from "../sub-components/Votes";

function Article () {
    const [article, setArticle] = useState({});

    const param = useParams().article;
    const id = param.split('-')[0]

    useEffect(() => {
        getArticleById(id).then((articleData)=>{
            setArticle(articleData);
        })
    }, [])

    return <section className="--article-width m-auto">

            <p className="text-capitalize article-topic">{article.topic}</p>

            <h2 className="article-title">{article.title}</h2>
            <p className="article-sub-heading">By {article.author}</p>
            <p className="article-sub-heading --date-formatting">{formatDateForArticle(article.created_at)}</p>

            <Image src={placeholderImg} fluid></Image>
            <p className="article-image-caption">| Caption for above image</p>

            <p className="article-body">{article.body}</p>
            <Votes article={article}/>
      
    </section>
}

export default Article;