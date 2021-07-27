import React from 'react';
import styled from 'styled-components'

import './Menu.styles.css';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(172, 172, 172);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                HOME
            </a>
            <a href="/">
                FAVORITES
            </a>
        </StyledMenu>
    )      
}

export default Menu;