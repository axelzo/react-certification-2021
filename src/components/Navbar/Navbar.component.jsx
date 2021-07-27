import React from 'react';
import styled from 'styled-components'

import Avatar from '../Avatar';
import Toggle from '../Toggle';

import './Navbar.styles.css';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background:#1976d2;
    padding: 8px;
`

const MenuBurger = styled.div`
    margin-right: 120px;
    margin-left: 20px;
    width: 35px;
    height: 35px;
    cursor:pointer;
`

const Search = styled.div`
    margin-right: auto;
`
const SearchInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
  box-sizing: border-box;
  &::placeholder {
    font-family: Arial, Helvetica, sans-serif; // <Thing> when hovered
  }
`
 const Navbar = ({ open, setOpen }) => {
    return (
        <Container>
            <MenuBurger  open={open} onClick={() => setOpen(!open)}>
                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#ffffff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
            </MenuBurger>
            <Search>
                <SearchInput type="search" placeholder="search..." />
            </Search>
            <Toggle/>
            <Avatar/>
        </Container>
    )
}

export default Navbar;
