import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Avatar from './index';

beforeEach(() => {
  render(<Avatar />);
});

describe('Avatar', () => {
  test('should contains an Image tag', () => {
    const displayedImage = screen.getByAltText('Avatar');
    expect(displayedImage.className).toBe('avatar');
  });

  test('should render span Sign out', () => {
    const avatar = screen.getByAltText('Avatar');
    fireEvent.mouseOver(avatar);
    const spanLabel = screen.getByText('Sign Out');
    expect(spanLabel).toBeInTheDocument();
  });

  test('should hide span Sign out', async () => {
    const avatar = screen.getByAltText('Avatar');
    await fireEvent.mouseEnter(avatar);
    await fireEvent.mouseLeave(avatar);
    const spanLabel = screen.queryByText('Sign Out');
    expect(spanLabel).not.toBeInTheDocument();
  });
});
