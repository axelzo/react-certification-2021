import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';
import Menu from '../Menu';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { StateContext } from '../../context/State/state';

// import './Layout.styles.css';

const Main = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.mode ? '#303030' : '#ffffff')};
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
`;

function Layout({ children }) {
  const stateContext = useContext(StateContext);
  const { darkMode } = stateContext;
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Main className="container" mode={darkMode}>
      <Navbar open={open} setOpen={setOpen} />
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>

      {children}
    </Main>
  );
}

export default Layout;
