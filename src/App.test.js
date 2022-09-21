import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //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
});
