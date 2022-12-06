import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import { formatDateForComments } from "../../utils/formatting";

function Comments ({articleId}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentsData)=>{
            setComments(commentsData);
        })
    }, [])

    return <section className="comments-section">
        <p>COMMENTS</p>
        <ul className="comment-list">
            {comments.map((comment) => {
                return <li className="comment-list-item">
                    <p className="comment-list-item__username">{comment.author}</p>
                    <p className="comment-list-item__date">{formatDateForComments(comment.created_at)}</p>
                    <p className="comment-list-item__body">{comment.body}</p>
                </li>
            })}
        </ul>
    </section>
        
}

export default Comments;