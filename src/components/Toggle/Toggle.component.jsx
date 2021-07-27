/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import './Toggle.styles.css';

const Container = styled.div`
  padding: 10px;
`;

const Toggle = () => {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <span> DARK MODE</span>
    </Container>
  );
};

export default Toggle;
