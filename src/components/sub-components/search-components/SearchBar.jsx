import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from 'react-feather/';
import { useNavigate } from "react-router";


export function SearchBar ({defaultSearchTerm = ""}) {
    const [searchInput, setSearchInput] = useState(defaultSearchTerm);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (searchInput === "") {
            return navigate(`/search`)
        }

        navigate(`/search?term=${searchInput}`)
    }

    return <form onSubmit={(event) => {handleSubmit(event)}} className="search-form d-flex justify-content-start m-0 mt-3">
        <Form.Control className="search-input" 
            type="text" 
            name="search" 
            placeholder="Search"
            value={searchInput}
            onChange={(event) => {setSearchInput(event.target.value)}}
        />

        <Button className="search-button" type="submit"><Search/></Button>
    </form>
}