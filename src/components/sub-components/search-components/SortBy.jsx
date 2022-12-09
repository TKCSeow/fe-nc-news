import { Dropdown, DropdownButton } from "react-bootstrap";
import {sortTypes} from "../../../data/sortTypes"
export function SortBy ({sortIndex, setSortIndex}) {   

    function handleClick(sortIndex) {
        setSortIndex(sortIndex);
    }

    return <DropdownButton id="dropdown-filter-button" title={`Sort By: ${sortTypes[sortIndex].desc}`}>
        {sortTypes.map((sortType, index)=>{
            return <Dropdown.Item key={sortType.desc} onClick={()=>{handleClick(index)}}>{sortType.desc}</Dropdown.Item>
        })}
    </DropdownButton>
}