import {useState} from "react"
import items from "../utils/Dropdown"
function Dropdown(props){
    const [displayState, setDisplayState] = useState("none");
    const showDropdown = () => {

        if(displayState === "block") {
            setDisplayState("none")
            document.querySelector(".dropdown-menu").setAttribute("data-toggle", "none")
        }else{
            setDisplayState("block")
            document.querySelector(".dropdown-menu").setAttribute("data-toggle", "block")
        }
        document.querySelector(".dropdown-menu").style.display = displayState
    };

    return(
     <div className= "input-group-prepend" >
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => showDropdown()}>Filter By:</button>
        <ul className="dropdown-menu" data-toggle="none">
            {
                items.map(({text, sortBy}, index) => {
                    return <li 
                    className="dropdown-item"
                    key={index} 
                    value={props.results}
                    onClick={()=> {showDropdown() 
                        props.handleSortBy({sortBy, text})}} 
                    >
                    {text}
                    </li>
                })
            }
        </ul>
    </div>
    )
}

export default Dropdown