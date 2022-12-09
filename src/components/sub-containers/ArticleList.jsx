import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getArticles } from "../../utils/api";
import ArticleListItem from "../sub-components/ArticleListItem";
import { useSearchParams } from 'react-router-dom'
import ArticleListItemAlt from "../sub-components/ArticleListItemAlt";

function ArticleList ({articlesInput, isFirstStyled = true}) {
    const [articles, setArticles] = useState([]);
    const [searchParams] = useSearchParams();
    const topic = searchParams.get("topic")



    useEffect(() => {
        if (articlesInput !== undefined) {
            return setArticles(articlesInput);
        }
        getArticles(topic).then((articlesData)=>{
            setArticles(articlesData);
        })
    }, [searchParams, articlesInput])

    return <section>
        {topic ? <h2 className="text-capitalize topic-header">{topic}</h2> : null}
        <ul className="article-list">
            {isFirstStyled ? 
                articles.map((article, index, articlesArr) => {
                    
                    if(index === 0) {
                        return <Row key={article.article_id} >
                            <ArticleListItem article={article} isFirst={true}/>
                        </Row>
                    }

                    //Groups three articles together in a row
                    if ((index + 2) % 3 === 0) {
                        let breakpoints = { xs: 12, sm: 4, md: 4 }

                        return <Row key={article.article_id}>
                            <Col xs={breakpoints.xs} sm={breakpoints.sm} md={breakpoints.md}>
                                <ArticleListItem article={articlesArr[index]} isFirst={false}/>
                            </Col>
                            <Col xs={breakpoints.xs} sm={breakpoints.sm} md={breakpoints.md}> 
                                {articlesArr[index + 1] !== undefined ? 
                                    <ArticleListItem article={articlesArr[index + 1]} isFirst={false}/> 
                                    : null}
                            </Col>
                            <Col xs={breakpoints.xs} sm={breakpoints.sm} md={breakpoints.md}>
                            {articlesArr[index + 2] !== undefined ? 
                                    <ArticleListItem article={articlesArr[index + 2]} isFirst={false}/> 
                                    : null}
                            </Col>                       
                        </Row>
                    }             
                })
                : articles.map((article) => {
                    return <ArticleListItemAlt key={article.article_id} article={article}/>
                })
            }
        
        </ul>
    </section>
}

export default ArticleList;