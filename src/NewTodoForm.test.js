import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component', () => {
  const { getByText } = render(<NewTodoForm />);
  const linkElement = getByText(/Add Todo/i);
  expect(linkElement).toBeInTheDocument();
});
