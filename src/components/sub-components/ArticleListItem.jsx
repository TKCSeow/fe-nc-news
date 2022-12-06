import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import placeholderImg from "../../images/placeholder_img.jpg"
import { Stack } from "react-bootstrap";
import { formatDate } from "../../utils/formatting";

function ArticleListItem ({article, isFirst}) {

    let img = { xs: 4, sm: 12, md: 12 }
    let text = { xs: 8, sm: 12, md: 12 }

    // Apply different breakpoints for first article in list
    if (isFirst) {
        img = { xs: 12, sm: 7, md: 7 }
        text = { xs: "auto", sm: 5, md: 5 }
    }

    return <li className="article-list-item">
        <Row className="h-100 mb-2">
            <Col xs={img.xs} sm={img.sm} md={img.md} className="">
                <Image src={placeholderImg} fluid></Image>
            </Col>
            <Col xs={text.xs} sm={text.sm}  md={text.md} className="d-flex flex-column">
                <Row className="mb-auto" >                   
                    <h2><b>{article.title}</b></h2>              
                </Row>
               <Row className="mt-auto" >
                <Col>
                    <Stack direction="horizontal" gap={0} >
                        <p className="text-capitalize">{article.topic} | By {article.author}</p>
                        <p className="ms-auto">{formatDate(article.created_at)}</p>
                    </Stack>
                    
                </Col>
     
               </Row>
            </Col>                        
        </Row>
        
    </li>
}

export default ArticleListItem;