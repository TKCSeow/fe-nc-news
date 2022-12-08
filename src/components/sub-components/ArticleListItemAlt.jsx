import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import placeholderImg from "../../images/placeholder_img_alt.jpg"
import { Stack } from "react-bootstrap";
import { formatDateForArticle } from "../../utils/formatting";
import { Link } from "react-router-dom";

function ArticleListItemAlt ({article}) {

    return <li className="article-list-item">
        <Row className="h-100 mb-2">
            <Col xs={4} className="">
                    <Link to={`/articles/${article.article_id}`}>
                        <Image src={placeholderImg} fluid></Image>
                    </Link>        
            </Col>
            <Col xs={8} className="d-flex flex-column">
                <Row className="" > 
                    <Link to={`/articles/${article.article_id}`}>                                   
                        <h2><b>{article.title}</b></h2> 
                    </Link>            
                </Row>
               <Row className="mt-auto" >
                <Col>
                    <p>Comments: {article.comment_count} | Votes: {article.votes}</p>
                    <Stack direction="horizontal" gap={0} >
                        <p><span className="text-capitalize">{article.topic}</span> | By {article.author}</p>
                        <p className="ms-auto">{formatDateForArticle(article.created_at)}</p>
                        
                    </Stack> 
                                   
                </Col>
     
               </Row>
            </Col>                        
        </Row>
        
    </li>
}

export default ArticleListItemAlt;