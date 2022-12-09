import { useEffect, useState, useContext } from "react";
import { deleteComment, getCommentsByArticleId } from "../../utils/api";
import { formatDateForComments } from "../../utils/formatting";
import { CommentForm } from "./CommentForm";
import { UserContext } from "../../contexts/User";
import { Button } from "react-bootstrap";
import { DeleteModal } from "./DeleteModal";

function Comments ({articleId}) {
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [showDeleteModel, setShowDeleteModel] = useState(false);
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);


    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentsData)=>{
            setComments(commentsData);
        })
    }, [])

    useEffect(() => {
        if (isDeleteConfirmed === true) {
            deleteComment(commentToDelete.comment_id).then(() => {
                setComments((currComments)=> {
                    
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

    return <section className="comments-section">
        <p>COMMENTS</p>
        {comments.length === 0 ?
        <div>
            <CommentForm comments={setComments} articleId={articleId}/>
            <p className="no-comment-message">No comments on this article</p>
        </div> :
        <div>
            <CommentForm setComments={setComments} articleId={articleId}/>
            <ul className="comment-list">
                {comments.map((comment, index) => {
                    if (comment === null) {
                        return <li key={"deletedComment"+index} className="comment-list-item">
                            <p className="comment-deleted-message">Comment deleted</p>
                        </li>
                    }
                    return <li key={comment.comment_id} className="comment-list-item">
                        <div className="d-flex justify-content-between">
                            <p className="comment-list-item__username">{comment.author}</p>
                            {user !== null ? 
                                comment.author === user.username ? 
                                    <Button className="delete-button" onClick={() => {
                                        setShowDeleteModel(true);
                                        setCommentToDelete(comment);
                                    }}>Delete</Button> 
                                : null : null}
                        </div>
                        
                        <p className="comment-list-item__date">{formatDateForComments(comment.created_at)}</p>
                        <p className="comment-list-item__body">{comment.body}</p>
                    </li>
                })}
            </ul>
        </div>
        }

        <DeleteModal setIsDeleteConfirmed={setIsDeleteConfirmed} isShow={showDeleteModel} setShowDeleteModel={setShowDeleteModel}/>
    </section>
        
}

export default Comments;