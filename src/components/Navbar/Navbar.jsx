import {useState} from 'react';
import Search from "./Search";
import intersect from '../../assets/Intersect.svg'
import Dropdown from "./Dropdown";
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar(){
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setDropdown(!dropdown)
  const closeMobileMenu = () => setClick(!click);
  
  const onMouseEnter =  () => {
    if(window.innerWidth < 1025){
        setDropdown(false)
    }else{
      setDropdown(true)
    }
  }

  const onMouseLeave =  () => {
    if(window.innerWidth < 1025){
        setDropdown(false)
    }else{
      setDropdown(false)
    }
  }
  return(
    <>
    <nav className='navbar'>
      <div className='logo'>
        <img src={intersect} alt="" />
        <Link to='/' className='navbar-logo'>
          E-COMM
        </Link>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>

      <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          HOME
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/ELECTRONICS' className='nav-links' onClick={closeMobileMenu}>
          ELECTRONICS
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/BOOKS' className='nav-links' onClick={closeMobileMenu}>
          BOOKS
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/MUSIC' className='nav-links' onClick={closeMobileMenu}>
          MUSIC
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/MOVIE' className='nav-links' onClick={closeMobileMenu}>
          MOVIE
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/CLOTHING' className='nav-links' onClick={closeMobileMenu}>
          CLOTHING
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/GAMES' className='nav-links' onClick={closeMobileMenu}>
          GAMES
        </Link>
      </li>
      
      <li className='nav-item'
        onClick = {handleClickDropdown}>
        <Link to='/MORE' className='nav-links' onClick={closeMobileMenu}>
          MORE <i className='fas fa-caret-down'/>
        </Link>
        {dropdown && <Dropdown/>}
      </li>
      <div className="nav-search-bar"><Search></Search></div>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;
