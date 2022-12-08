import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { getRedirectUrl } from "../../utils/general";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { postCommentByArticleId } from "../../utils/api";

export function CommentForm ({setComments, articleId}) {
    const {user} = useContext(UserContext);
    const location = useLocation();
    const [commentInput, setCommentInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    if(user === null) {
        return <p className="border border-2 py-2 px-3">
            To comment please {" "} 
            <Link to={getRedirectUrl(location)} className="--link-dark-alt-2" style={{fontSize:"1rem"}}>
                sign in
            </Link>
        </p>
    }

    function handleSubmit(event) {
        event.preventDefault();

        event.target[0].disabled = true;
        event.target[1].disabled = true;

        if (commentInput === "") {
            return null;
        }
        
        postCommentByArticleId(articleId, user.username, commentInput)
        .then((newComment) => {
            setComments((currComments)=> {
                return [newComment, ...currComments]
            })
            setErrorMessage("")
            setCommentInput("")
            event.target[0].disabled = false;
            event.target[1].disabled = false;
        })
        .catch(() => {
            setErrorMessage("Sorry seems that didn't work, please try again")
            event.target[0].disabled = false;
            event.target[1].disabled = false;
        })

        


    }

    return<form onSubmit={(event) => {handleSubmit(event)}}>
        <div>
            <textarea className="comment-input text-wrap" 
                type="textarea" 
                name="comment" 
                placeholder="Leave a comment on this article..."
                value={commentInput}
                onChange={(event) => {setCommentInput(event.target.value)}}
                required
            />
        </div>
        
        <Row>
            <Col xs={10} > 
                <span className="--error-message">{errorMessage}</span>
            </Col>
            <Col xs={2} className="d-flex justify-content-end">
                <Button className="comment-submit-button" type="submit">Submit</Button>
            </Col>
            
        </Row>    
    </form>
}