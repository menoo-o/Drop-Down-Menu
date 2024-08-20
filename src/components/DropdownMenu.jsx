import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({ goToMenu, leftIcon, children }) {
    return (
      <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">→</span>  {/* Replacing SVG with a simple arrow symbol */}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>Home</DropdownItem>
          <DropdownItem goToMenu="shop">Shop</DropdownItem>
          <DropdownItem goToMenu="contact">Contact Us</DropdownItem>
          <DropdownItem>Blogs</DropdownItem>
          <DropdownItem>About Us</DropdownItem>
          <DropdownItem>Login</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'shop'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="←">  {/* Replacing SVG with a simple back arrow symbol */}
            <h2>Categories</h2>
          </DropdownItem>
          <DropdownItem>Grains & Cereals</DropdownItem>
          <DropdownItem>Rice</DropdownItem>
          <DropdownItem>Lentils & Beans</DropdownItem>
          <DropdownItem>Cooking & Baking</DropdownItem>
          <DropdownItem>Herbs & Spices</DropdownItem>
          <DropdownItem>Organic Sweeteners</DropdownItem>
          <DropdownItem>Dried Fruits & Nuts</DropdownItem>
          <DropdownItem>Storage Essentials</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'contact'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="←">  {/* Replacing SVG with a simple back arrow symbol */}
            <h2>Contact Us</h2>
          </DropdownItem>
          <DropdownItem leftIcon="📞">WhatsApp</DropdownItem>  {/* Replacing SVG with a simple phone symbol */}
          <DropdownItem leftIcon="📸">Instagram</DropdownItem>  {/* Replacing SVG with a simple camera symbol */}
          <DropdownItem leftIcon="📘">Facebook</DropdownItem>  {/* Replacing SVG with a simple book symbol */}
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
