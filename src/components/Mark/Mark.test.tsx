import { render, screen } from '@testing-library/react';
import Mark from './Mark';

describe('TEST Mark', () => {
  test('renders button', () => {
    render(<Mark name={'Testing'} time={7} active={20} leftMargin={30} />);
    const mark = screen.getByText('Testing');
    expect(mark).toBeInTheDocument();
  });
});
