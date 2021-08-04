import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoCard from './index';

beforeEach(() => {
  render(<VideoCard description="test" title="title" image="src" />);
});

describe('VideoCard', () => {
  test('should contains an Image tag', () => {
    const displayedImage = screen.getByAltText('Thumbnail');
    expect(displayedImage.src).toBe('http://localhost/src');
  });

  test('should contains Title', () => {
    const titleTag = screen.getByText('title');
    expect(titleTag).toBeInTheDocument();
  });

  test('should render description', () => {
    const pTag = screen.getByText('test');
    expect(pTag).toBeInTheDocument();
  });
});
