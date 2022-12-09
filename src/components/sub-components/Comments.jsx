import { useEffect, useState, useContext } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import { formatDateForComments } from "../../utils/formatting";
import { CommentForm } from "./CommentForm";
import { UserContext } from "../../contexts/User";
import { Button } from "react-bootstrap";

function Comments ({articleId}) {
    const {user} = useContext(UserContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentsData)=>{
            setComments(commentsData);
        })
    }, [])

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
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment-list-item">
                        <div className="d-flex justify-content-between">
                            <p className="comment-list-item__username">{comment.author}</p>
                            {comment.author === user.username ? <Button className="delete-button">Delete</Button> : null}
                        </div>
                        
                        <p className="comment-list-item__date">{formatDateForComments(comment.created_at)}</p>
                        <p className="comment-list-item__body">{comment.body}</p>
                    </li>
                })}
            </ul>
        </div>
        }
    </section>
        
}

export default Comments;