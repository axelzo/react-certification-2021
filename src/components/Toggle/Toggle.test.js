/* eslint-disable no-multi-assign */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { ConfigProvider } from '../../context/State/state';

import Toggle from './index';

const valueContextMock = {
  darkMode: false,
};

beforeEach(() => {
  render(
    <ConfigProvider value={valueContextMock}>
      <Toggle />
    </ConfigProvider>
  );
});

describe('Toggle', () => {
  test('should switch element', () => {
    const el = document.querySelector('.switch');
    expect(el).toBeInTheDocument();
  });

  test('should render Dark mode text', async () => {
    const spanLabel = screen.queryByText(' DARK MODE');
    expect(spanLabel).not.toBeInTheDocument();
  });
});
