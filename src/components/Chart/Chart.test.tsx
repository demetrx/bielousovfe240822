import { render, screen, fireEvent } from '@testing-library/react';
import Chart from './Chart';

describe('TEST CHART', () => {
  test('renders button', () => {
    render(<Chart />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Click', () => {
    render(<Chart />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
  });
});
