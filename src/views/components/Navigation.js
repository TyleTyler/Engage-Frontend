import { Link } from 'react-router-dom';
import logo from './logo.png'
const Nav = () => {
    return (
        <div className="navBar">
            <img src={ logo } alt="Logo.png" className="logo" />
            <nav className="nav">
                <Link to="/Home" className="navEl"> Home </Link> | 
                <Link to= "/UpdateRegister" className='navEl'> Register</Link> | 
                <Link to= "/Ranking" className='navEl'> Ranking </Link> | 
                <Link to= "/Reports" className='navEl'> Reports </Link>|
                <Link to="/Winners" className='navEl'> Winners</Link> |
                <Link to= "/Events" className="navEl"> Events </Link> | 
                <Link to= "/About-us" className="navEl"> About Us</Link>  
            </nav>
        </div>
      );
}
 
export default Nav;