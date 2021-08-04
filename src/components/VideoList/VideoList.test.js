import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './index';

beforeEach(() => {
  render(<VideoList />);
});

describe('VideoCard', () => {
  test('should contains a Loading text', () => {
    const loadingText = screen.queryByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
