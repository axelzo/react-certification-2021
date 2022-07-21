import React from 'react';
import { render, screen } from '@testing-library/react';

import AppState from '../../context/State/state';

import VideoList from './index';

beforeEach(() => {
  const mockState = {
    darkMode: false,
    handleDarkMode: jest.fn(),
  };

  render(
    <AppState value={mockState}>
      <VideoList />
    </AppState>
  );
});

describe('VideoList', () => {
  test('should contains a Loading text', () => {
    const loadingText = screen.queryByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
