import "./Navbar.css";
const Navbar = ()=>{
    return(
       <div className="nav">
        <div className="nav-logo">EV-OLUTION</div>
        <ul className="nav-menu">
            <li>home</li>
            <li>about</li>
            <li>explore</li>
            <li className="nav-contact">contact</li>
        </ul>
       </div>
    )
}
export default Navbar;