import {useState} from 'react';
import { MenuItems } from './Menuitems';
import {Link} from 'react-router-dom';
import "./Dropdown.css";
const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div>
      <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, indexedDB) => {return(
            <li key={indexedDB}>
                <Link className={item.cName} to={item.path} onClick={handleClick}>
                    {item.title}
                </Link>
            </li>
        )})}
      </ul>
    </div>
  )
}

export default Dropdown
