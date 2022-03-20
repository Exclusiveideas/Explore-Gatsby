import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavLinks, NavLogo, NavMenu, NavItem } from './NavbarElements';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);

    useEffect(() => {
      changeNav();

      window.addEventListener("scroll", changeNav);
    }, []);

    const changeNav = () => {
        if(window.scrollY >= 80 ) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    

    return (
        <>
          <IconContext.Provider value={{ color: "#141414"}}>
              <Nav active={scroll} click={click}>
                  <NavbarContainer>
                      <NavLogo to="/">
                          <NavIcon />
                          EXPLORE
                      </NavLogo>
                      <MobileIcon onClick={handleClick}>
                          { click ? <FaTimes /> : <FaBars />}
                      </MobileIcon>
                      <NavMenu onClick={handleClick} click={click}>
                          <NavItem>
                              <NavLinks to="/">Home</NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to="/image">Images</NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to="/destinations">Destination</NavLinks>
                          </NavItem>
                      </NavMenu>
                  </NavbarContainer>
              </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar