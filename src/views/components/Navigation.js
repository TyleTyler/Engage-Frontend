import { Link } from 'react-router-dom';
import logo from './logo.png'
const Nav = () => {
    return (
        <div className="navBar">
            <img src={ logo } alt="Logo.png" className="logo" />
            <nav className="nav">
                <Link to="/Home" className="navEl homeEl"> Home </Link> 
                <Link to= "/Register" className='navEl registerEl'> Register</Link>
                <Link to= "/Ranking" className='navEl rankingEl'> Ranking </Link> 
                {/* <Link to= "/Search" className='navEl'> Search </Link>| */}
                {/* <Link to="/Winners" className='navEl'> Winners</Link> | */}
                {/* <Link to= "/Events" className="navEl"> Events </Link> |  */}
                <Link to= "/About-us" className="navEl aboutEl"> About Us</Link>  
            </nav>
        </div>
      );
}
 
export default Nav;