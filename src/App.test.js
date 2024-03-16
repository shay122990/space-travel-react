import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});

