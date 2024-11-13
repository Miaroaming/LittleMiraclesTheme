import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCustomizer from "../hooks/useCustomizer";
import axios from "axios";

const baseUrl = import.meta.env.VITE_WP_BASEURL

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {mobileMenu} = useCustomizer();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // toggle between true/false
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // disable page scroll when menu is open
  }

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const mobile = document.querySelector('.nav-links');
    if (isOpen && mobile) {
        mobile.style.backgroundColor = mobileMenu;
    } else {
        mobile.style.backgroundColor = 'transparent';
    }
  }, [isOpen, mobileMenu])


//   useEffect(() => {
//     const fetchNavLogo = async () => {
//         try {
//             const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`);
//             if (response.status === 200) {
//                 const data = response.data;
//                 setLogoUrl(data[0]);
//             } else {
//                 console.error('Failed to fetch logo url');
//             }
//         } catch (error) {
//             console.log('error fetchung logo', error);
//         }
//     };

//     fetchNavLogo();
//   }, [])

  return (
    <header>
        <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
            <NavLink to='/' className='logo'>
                <img src="/images/logo.png" alt="Logo image" />
            </NavLink>
            {/* Hamburger icon below: */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
            </div>
            {/* Navlinks */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {/* Must have li and everything inside for each link */}
                <li>
                    <NavLink
                        to='/'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/contact'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Contact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/findsupport'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Find Support
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/support'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Support us
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/shop'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Shop
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/cart'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Cart
                    </NavLink>
                </li>

                <button className="primary-btn">
                    <NavLink
                        to='/donate'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Donate
                    </NavLink>
                </button>

            </ul>
        </nav>
        {isOpen && <div className='overlay' onClick={closeMenu}></div>} 
    </header>
  );
};

export default Navbar;
