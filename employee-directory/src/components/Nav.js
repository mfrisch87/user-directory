import Dropdown  from "./Dropdown";
import Search from "./Search";

function Nav(props){
    return(
        <nav className="input-group mb-3">
            <Dropdown {...props}/>
            <Search {...props}/>
        </nav>
    )
}
export default Nav