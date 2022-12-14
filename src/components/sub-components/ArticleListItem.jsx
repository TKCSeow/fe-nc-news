import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import placeholderImg from "../../images/placeholder_img_alt.jpg"
import { Stack } from "react-bootstrap";
import { formatDateForArticleList } from "../../utils/formatting";
import { Link } from "react-router-dom";

function ArticleListItem ({article, isFirst}) {

    // Apply different breakpoints for first article in list
    const img = isFirst ? { xs: 12, sm: 7, md: 7 } : { xs: 4, sm: 12, md: 12 }
    const text = isFirst ? { xs: "auto", sm: 5, md: 5 } : { xs: 8, sm: 12, md: 12 }

    return <li className="article-list-item">
        <Row className="h-100 mb-2">
            <Col xs={img.xs} sm={img.sm} md={img.md} className="">
                    <Link to={`/articles/${article.article_id}`}>
                        <Image src={placeholderImg} fluid></Image>
                    </Link>        
            </Col>
            <Col xs={text.xs} sm={text.sm}  md={text.md} className="d-flex flex-column">
                <Row className="" > 
                    <Link to={`/articles/${article.article_id}`}>                                   
                        <h2><b>{article.title}</b></h2> 
                    </Link>            
                </Row>
               <Row className="mt-auto" >
                <Col>
                    <Stack direction="horizontal" gap={0} >
                        <p><span className="text-capitalize">{article.topic}</span> | By {article.author}</p>
                        <p className="ms-auto">{formatDateForArticleList(article.created_at)}</p>
                    </Stack>           
                </Col>
     
               </Row>
            </Col>                        
        </Row>
        
    </li>
}

export default ArticleListItem;