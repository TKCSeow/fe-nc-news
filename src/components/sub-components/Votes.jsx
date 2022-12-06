import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { patchArticleVotes } from "../../utils/api"

export function Votes ({article}) {

    const [votes, setVotes] = useState(
        article.votes !== undefined ? article.votes : 0
    )
    
    function handleClick() {
        setVotes((currVotes)=> {
            return +currVotes + 1;
        })
        // patchArticleVotes(article.article_id)
    }

    return <Button onClick={() => {handleClick()}}>votes: {votes}</Button>
}