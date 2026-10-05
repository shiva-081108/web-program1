import { useNavigate } from "react-router-dom";


function Home(){

const navigate = useNavigate();


function handleLogib(){
navigate("/dashboard")
}




    return(
        <div>
            <h1>welcome students</h1>
            <button>login</button>
        </div>
    )
}
export default Home 