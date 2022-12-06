import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getArticles } from "../../utils/api";
import ArticleListItem from "../sub-components/ArticleListItem";


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
            {articles.map((article, index, articlesArr) => {
                
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

                
            })}
        </ul>
    </section>
}

export default ArticleList;