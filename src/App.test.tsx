import React from 'react';
import { render, screen } from '@testing-library/react';
import LayoutPrinc from './layout/layout';

test('renders learn react link', () => {
  render(<LayoutPrinc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
