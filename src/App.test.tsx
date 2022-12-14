import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders button', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Click', () => {
    render(<App />);
    const btn = screen.getByRole('button');

    fireEvent.click(btn);
  });
});
