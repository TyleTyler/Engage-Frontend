import { Link } from 'react-router-dom';
import logo from './logo.png'
const Nav = () => {
    return (
        <div className="navBar">
            <img src={ logo } alt="Logo.png" className="logo" />
            <nav className="nav">
                <Link to="/Home" className="navEl"> Home </Link> | 
                <Link to= "/UpdateRegister" className='navEl'> Update/Register</Link> | 
                <a href = "/Ranking" className='navEl'> Ranking </a> | 
                <a href = "/Reports" className='navEl'> Reports </a>|
                <a href= "/Events" className="navEl"> Events </a> | 
                <a href = "/About-us" className="navEl"> About Us</a>  
            </nav>
        </div>
      );
}
 
export default Nav;