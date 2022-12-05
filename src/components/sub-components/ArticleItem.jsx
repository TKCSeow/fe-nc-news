function ArticleItem ({article}) {

    function capitaliseWord(word) {
        const splitWord = word.split('')
        splitWord[0] = splitWord[0].toUpperCase();
        return splitWord.join('')
    }

    return <li className="article-item">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <p>{capitaliseWord(article.topic)} | By {article.author}</p>
    </li>
}

export default ArticleItem;