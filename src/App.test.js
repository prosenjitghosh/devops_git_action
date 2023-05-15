import { render, screen } from '@testing-library/react';
import App from './App';
import { dayOfTheWeek } from './DayFinder';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('4/11/2020') );
    expect( day ).toBe('Wednesday');
});