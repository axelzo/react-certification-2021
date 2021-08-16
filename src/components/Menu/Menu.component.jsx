import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../context/State/state';

import './Menu.styles.css';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid ${(props) => (props.mode ? '#ffffff' : '#303030')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 2;
  background-color: ${(props) => (props.mode ? '#303030' : '#ffffff')};
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
`;

const Span = styled.span`
  cursor: pointer;
`;

const Menu = ({ open }) => {
  const stateContext = useContext(StateContext);
  const { darkMode } = stateContext;

  return (
    <StyledMenu mode={darkMode} open={open}>
      <Span onClick={() => window.location.reload()}>HOME</Span>
      <Span>FAVORITES</Span>
    </StyledMenu>
  );
};

export default Menu;
