import { Form, Link } from "react-router-dom";
import "./NavBar.css" 
// di chuyen giua nhung trang, link toi dau, không refresh lại component 
const NavBar=()=>{
    return(
        <>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/checkout">My Cart</Link>
            <Link to="/login">Login</Link>
        </nav>
        </>
    )
}
export default NavBar;