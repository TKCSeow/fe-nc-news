import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../contexts/User';
import { deleteComment, getArticles, getComments } from '../../utils/api';
import { formatDateForComments } from '../../utils/formatting';
import { DeleteModal } from '../sub-components/DeleteModal';

export function ViewComments(){
    const { user } = useContext(UserContext);
    const [articles, setArticles] = useState([]);
    const [commentsByUser, setCommentsByUser] = useState([]);
    const [showDeleteModel, setShowDeleteModel] = useState(false);
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);

    useEffect(() => {
        if(user === null){
            return;
        }

        getComments(user.username).then((comments) => {
            setCommentsByUser(comments);
        })

    }, [user])

    useEffect(() => {
        getArticles().then((articlesData)=>{
            const tempArticles = articlesData.filter((article) => {
                return commentsByUser.some((comment) => {
                    if(comment === null) {
                        return false;
                    }
                    return comment.article_id === article.article_id
                })
            })
            setArticles(tempArticles)     
        })
    }, [commentsByUser])

    useEffect(() => {
        if (isDeleteConfirmed === true) {
            deleteComment(commentToDelete.comment_id).then(() => {
                setCommentsByUser((currComments)=> {
                    
                    return currComments.map((currComment) => {
                        if (currComment === null) {
                            return null
                        }
                        if (currComment.comment_id === commentToDelete.comment_id) {                    
                            return null
                        }
    
                        return currComment;
                    })
                })
            })
            setIsDeleteConfirmed(false);
            setCommentToDelete(null)
        }     
        
    }, [isDeleteConfirmed])
  

    return <main>
        <h2 className="topic-header">Accounts</h2>
        <h3 className="my-1">Your Comments</h3>

        {articles.map((article) => {
            return <section key={article.article_id}>
                <h4 className='my-4'>{article.title}</h4>
                <Container style={{maxWidth:"100%"}}>
                <ul className='list-unstyled'>
                {commentsByUser.map((comment) => {
                    if (comment === null) {
                        return null
                    }
                    if(comment.article_id === article.article_id) {
                       
                        return <li className='comment-list-item border p-3' key={comment.comment_id}>
                            <Row>
                                <Col  xs={10}>
                                    <p className="comment-list-item__date">{formatDateForComments(comment.created_at)}</p>
                                    <p className="comment-list-item__body">{comment.body}</p>
                                </Col>
                                <Col  xs={2} className="d-flex justify-content-center align-items-center">
                                    <Button className="delete-button" onClick={() => {
                                                    setShowDeleteModel(true);
                                                    setCommentToDelete(comment);
                                                }}>Delete</Button> 
                                </Col>                                                      
                            </Row>
                        </li>
                    }
                })}
                    </ul>
                    </Container>
            </section>
        })}
        <DeleteModal setIsDeleteConfirmed={setIsDeleteConfirmed} isShow={showDeleteModel} setShowDeleteModel={setShowDeleteModel}/>

    </main>
}