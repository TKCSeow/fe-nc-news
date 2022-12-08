import Container from 'react-bootstrap/Container';
import ArticleList from './ArticleList';
import { useEffect, useState } from "react";
import { getArticles } from '../../utils/api';
import { Filters } from '../sub-components/search-components/Filters';
import { ActiveFilters } from '../sub-components/search-components/ActiveFilters';
import { SortBy } from '../sub-components/search-components/SortBy';
import {sortTypes} from "../../data/sortTypes"
import { SearchBar } from '../sub-components/search-components/SearchBar';
import { Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'

 function Search () {
    const [searchParams] = useSearchParams();
    const searchParamValue = searchParams.get("term")

    const [articles, setArticles] = useState([]);
    const [filters, setFilters] = useState([]);
    const [sortIndex, setSortIndex] = useState(0);

    useEffect(() => {
        getArticles(null, sortTypes[sortIndex].sortType, sortTypes[sortIndex].order).then((articlesData)=>{

            let filteredArticles = articlesData;
            
            if(searchParamValue) {
                filteredArticles = filteredArticles.filter((article) => {
                    return article.title.toLowerCase().includes(searchParamValue);
                })
            }

            if (filters.length > 0 && filteredArticles.length > 0) {
                filteredArticles = filteredArticles.filter((article) => {
                    return filters.includes(article.topic);
                })
            
            }     

            setArticles(filteredArticles);

        })
    }, [filters, sortIndex, searchParams])

    return <div>
        <Row>
            <Col xs={2}>
                <h2 className="text-capitalize topic-header">Search</h2>
            </Col>
            <Col xs={10}>
                <SearchBar defaultSearchTerm={searchParamValue ? searchParamValue : ""}/>
            </Col>
        </Row>

        <ActiveFilters filters={filters} setFilters={setFilters}/>
        <div className='d-flex justify-content-between'>
            <Filters setFilters={setFilters} />
            {
                articles.length !== 0 ? <div className='d-flex justify-content-center align-items-center'>
                <p className='articles-found text-center m-0 mt-4'>{articles.length} articles found
                </p></div> : null
            }
            <SortBy sortIndex={sortIndex} setSortIndex={setSortIndex}/>
        </div>
        <hr/>
        {articles.length === 0 ? <p className='no-articles text-center'>No articles found</p> : null}
        <ArticleList articlesInput={articles} isFirstStyled={false}/>
    </div>
}

export default Search;