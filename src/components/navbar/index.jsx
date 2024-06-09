import React, { useState } from "react";  // Import useState from React
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ',
        to: '/about'
    },
    {
        label: 'CAREER',
        to: '/Resume'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);  // useState for managing the toggle state

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const handleMenuItemClick = () => {
        setToggleIcon(false);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo" onClick={handleMenuItemClick}>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to} onClick={handleMenuItemClick}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 4fb66d69a8b3b9d0fa81a0dc185eb9374b49bbf6
