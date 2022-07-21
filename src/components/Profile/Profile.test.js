import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Profile from './index';

import { ConfigProvider } from '../../context/State/state';
import { AuthConfigProvider } from '../../providers/Auth';

const valueContextMock = {
  profile: {
    showDropdown: true,
  },
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
        <Profile />
      </AuthConfigProvider>
    </ConfigProvider>
  );
});

describe('Profile', () => {
  test('should contains an Image tag', () => {
    const displayedImage = screen.getByAltText('Profile');
    expect(displayedImage.className).toBe('profile');
  });

  test('should render span Sign out', () => {
    const profile = screen.getByAltText('Profile');
    fireEvent.mouseOver(profile);
    const el = document.querySelector('.sc-bdnxRM');
    expect(el).toBeInTheDocument();
  });

  test('should should deauthenticated profile image ', () => {
    const profile = screen.getByAltText('Profile');
    fireEvent.mouseEnter(profile);
    const el = document.querySelector('.sc-bdnxRM');
    fireEvent.mouseEnter(el);
    const profileDeauth = document.querySelector('.sc-bqGGPW');
    expect(profileDeauth).not.toBeInTheDocument();
  });
});
