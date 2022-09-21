import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //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
});
