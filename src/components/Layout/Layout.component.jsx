import React, { useState, useRef } from 'react';

import Navbar from '../Navbar';
import Menu from '../Menu';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';

import './Layout.styles.css';

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <main className="container">
      <Navbar open={open} setOpen={setOpen} />
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>

      {children}
    </main>
  );
}

export default Layout;
