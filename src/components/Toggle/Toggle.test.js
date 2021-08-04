import React from 'react';
import { render, screen } from '@testing-library/react';

import Toggle from './index';

beforeEach(() => {
  render(<Toggle />);
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
