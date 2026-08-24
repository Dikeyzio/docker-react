import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ch3ange/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders tesf react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ch3ange/i);
  expect(linkElement).toBeInTheDocument();
});
