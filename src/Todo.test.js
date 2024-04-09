import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component', () => {
  const { getByText } = render(<Todo />);
  const linkElement = getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});
