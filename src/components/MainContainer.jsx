import Container from "react-bootstrap/Container";
import ArticleList from "./sub-containers/ArticleList";
import {Routes, Route} from 'react-router'
import Article from "./sub-containers/Article";
function MainContainer () {

    return <main>
        <Container className="--content-width">
            <Routes>
                <Route path="/" element={<ArticleList/>} />
                <Route path="/articles" element={<ArticleList/>} />
                <Route path={`/articles/:article`} element={<Article/>} />
            </Routes>
        </Container>
    </main>

}

export default MainContainer;