import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { patchArticleVotes } from "../../utils/api"

export function Votes ({article}) {

    const [votes, setVotes] = useState(
        article.votes !== undefined ? article.votes : 0
    )
    const [errorMessage, setErrorMessage] = useState("")
    
    function handleClick() {
        setVotes((currVotes)=> {
            return +currVotes + 1;
        })
        patchArticleVotes(article.article_id+"a")
        .catch((err) => {
            setVotes((currVotes)=> {
                return +currVotes - 1;
            })
            setErrorMessage("Sorry seems that didn't work, please try again")
        })
    }

    return <section>
            <Button onClick={() => {handleClick()}}>votes: {votes}</Button>
            <p className="votes-error-message">{errorMessage}</p>
        </section>
}