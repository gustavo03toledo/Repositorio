import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App successfully', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner'); // Header is rendered via App component
  expect(headerElement).toBeInTheDocument();
});
