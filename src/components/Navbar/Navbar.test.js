/* eslint-disable no-multi-assign */
import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from './index';

import { ConfigProvider } from '../../context/State/state';
import { AuthConfigProvider } from '../../providers/Auth';

const valueContextMock = {
  profile: {
    showDropdown: false,
  },
  video: {
    search: 'wizeline',
    selectedVideo: {},
    videos: [],
  },
  darkMode: false,
  hideProfileDropdown: jest.fn(),
  showProfileDropdown: jest.fn(),
  handleSearch: jest.fn(),
  handleVideosList: jest.fn(),
  handleSelectVideo: jest.fn(),
  handleDarkMode: jest.fn(),
};

const authContextValues = {
  authenticated: true,
  login: jest.fn(),
  logout: jest.fn(),
};

beforeEach(() => {
  render(
    <ConfigProvider value={valueContextMock}>
      <AuthConfigProvider value={authContextValues}>
        <NavBar />
      </AuthConfigProvider>
    </ConfigProvider>
  );
});

describe('Navbar', () => {
  test('should switch element', () => {
    const el = screen.getByPlaceholderText(/search.../);
    expect(el).toBeInTheDocument();
  });

  test('should render Dark mode text', async () => {
    const spanLabel = screen.queryByText(' DARK MODE');
    expect(spanLabel).not.toBeInTheDocument();
  });
});
