import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { getTopics } from "../../../utils/api";


export function Filters ({setFilters}) {
    const [topics, setTopics] = useState([]);

    useEffect(()=> {
        getTopics().then(topicsData => {
            setTopics(topicsData);
        })
    },[])

    function handleClick(topic) {
        setFilters((currFilters) => {
            if (currFilters.includes(topic) === false) {
                return [...currFilters, topic]
            }

            return [...currFilters]
        })
    }

    return <DropdownButton id="dropdown-filter-button" title="Filter">
        {topics.map((topic)=>{
            return <Dropdown.Item key={topic.slug} onClick={()=>{handleClick(topic.slug)}} className="text-capitalize">{topic.slug}</Dropdown.Item>
        })}
    </DropdownButton>
}