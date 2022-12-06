import Container from "react-bootstrap/Container";
import ArticleList from "./sub-containers/ArticleList";

function MainContainer () {
    return <Container className="--content-width">
            <ArticleList/>
        </Container>

}

export default MainContainer;