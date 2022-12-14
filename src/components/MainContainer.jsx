import Container from "react-bootstrap/Container";
import ArticleList from "./sub-containers/ArticleList";
import {Routes, Route} from 'react-router'
import Article from "./sub-containers/Article";
import Search from "./sub-containers/Search";
import { ViewComments } from "./sub-containers/ViewComments";

function MainContainer () {

    return <main>
        <Container className="--content-width">
            <Routes>
                <Route path="/" element={<ArticleList/>} />
                <Route path="/articles" element={<ArticleList/>} />
                <Route path={`/articles/:article`} element={<Article/>} />
                <Route path="/*" element={<h2 className="m-4 text-center">404 Page Not Found</h2>}/>
                <Route path="/search" element={<Search/>} />
                <Route path="/account/view-comments" element={<ViewComments/>}/>
            </Routes>
        </Container>
    </main>

}

export default MainContainer;