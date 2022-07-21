import React, { useContext } from 'react';
import styled from 'styled-components';

import Profile from '../Profile';
import Toggle from '../Toggle';

import { StateContext } from '../../context/State/state';
import { useAuth } from '../../providers/Auth';

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100vw;
  background-color: ${(props) => (props.mode ? '#556cd6' : '#1c5476')};
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
`;

const MenuBurger = styled.div`
  margin-right: 100px;
  margin-left: 24px;
  padding-top: 0;
  padding-bottom: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 20px;
    margin-left: 12px;
    padding-top: 0;
    padding-bottom: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Search = styled.div`
  margin-right: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  height: 32.5px;

  &::placeholder {
    font-family: Arial, Helvetica, sans-serif; // <Thing> when hovered
  }
`;

const Navbar = ({ open, setOpen }) => {
  const stateContext = useContext(StateContext);
  const { authenticated } = useAuth();
  const { handleSearch, darkMode } = stateContext;

  return (
    <Container mode={darkMode ? 1 : 0}>
      {authenticated ? (
        <>
          <MenuBurger onClick={() => setOpen(!open)}>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="#ffffff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </MenuBurger>
          <Search>
            <SearchInput type="search" placeholder="search..." onChange={handleSearch} />
          </Search>
          <Toggle />
        </>
      ) : undefined}
      <Profile />
    </Container>
  );
};

export default Navbar;
