import { NavLink } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/products'>Produtos</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
    </nav>
  )
}

export default Navbar