import { useState } from "react"
import Button from "react-bootstrap/Button"
import { patchArticleVotes } from "../../utils/api"

export function Votes ({article}) {

    const [votes, setVotes] = useState(article.votes)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    
    function handleClick(event) {
        event.target.disabled = true
        setErrorMessage("")
        setSuccessMessage("You voted!")
        setVotes((currVotes)=> {
            return +currVotes + 1;
        })
        patchArticleVotes(article.article_id)
        .catch(() => {
            setVotes((currVotes)=> {
                return +currVotes - 1;
            })
            setSuccessMessage("")
            setErrorMessage("Sorry seems that didn't work, please try again")
            event.target.disabled = false
        })
    }

    return <section>
        <div className="d-flex justify-content-end">
            <Button className="votes-button" onClick={(event) => {handleClick(event)}}>Votes {votes}</Button>
        </div>
        <p className="votes-success-message text-end">{successMessage}</p> 
        <p className="votes-error-message text-end">{errorMessage}</p>    
            
    </section>
}