import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from 'react-feather/';
import { useNavigate } from "react-router";

function SearchBarHeader () {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        if (searchInput === "") {
            return navigate(`/search`)
        }

        navigate(`/search?term=${searchInput}`)
        setSearchInput("");
    }

    return <form onSubmit={(event) => {handleSubmit(event)}} className="search-header-header-form d-flex justify-content-end m-0 mt-3">
 
        <Form.Control className="search-header-input" 
            type="text" 
            name="search" 
            placeholder="Search"
            value={searchInput}
            onChange={(event) => {setSearchInput(event.target.value)}}
        />
        
        <span>
            <Button className="search-header-button" type="submit"><Search/></Button>
        </span>
 
</form>
}

export default SearchBarHeader;