import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  const { getByText } = render(<TodoList />);
  const linkElement = getByText(/NewTodoForm/i);
  expect(linkElement).toBeInTheDocument();
});
