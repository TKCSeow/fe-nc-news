import { Button } from "react-bootstrap"
import { X } from "react-feather"

export function ActiveFilters ({filters, setFilters}) {

    function handleClick(filter) {
        setFilters((currFilters) => {
            return currFilters.filter (currfilter => {
                return currfilter !== filter
            })
        })
    }

    return <section>
        {filters.map((filter) => {
            return <Button key={filter} onClick={() => {handleClick(filter)}} className="active-filter text-capitalize">
                {filter}
                <span className="ms-2">
                    <X size={20}/>
                </span>
            </Button>
        })}
    </section>
}