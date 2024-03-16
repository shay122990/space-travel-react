import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/Home/i);
  expect(homeLinks.length).toBeGreaterThan(0);
});
