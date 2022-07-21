/* eslint-disable no-multi-assign */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from './index';

import { ConfigProvider } from '../../context/State/state';

const valueContextMock = {
  darkMode: false,
};

beforeEach(() => {
  render(
    <ConfigProvider value={valueContextMock}>
      <Menu />
    </ConfigProvider>
  );
});

describe('Menu', () => {
  test('should render Home span', async () => {
    const spanLabel = screen.queryByText('HOME');
    expect(spanLabel).toBeInTheDocument();
  });

  test('should render favorites span', async () => {
    const spanLabel = screen.queryByText('FAVORITES');
    expect(spanLabel).toBeInTheDocument();
  });
});
