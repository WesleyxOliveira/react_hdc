// 2 - links com react router
import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        {/* <Link to='home'>Home</Link>
        <Link to='/about'>Sobre</Link> */}
        <NavLink to={'home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
    </nav>
  )
}

export default Navbar