import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <link to="/">Home</link>
            <link to="/Dashboard">Dashboard</link>
            <link to="/profile">profile</link>

        </nav>
    )
}
export default Navbar