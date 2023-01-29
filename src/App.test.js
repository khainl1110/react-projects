import { color } from '@mui/system';
import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

import Button from './Components/ComponentsWithTest/Button';
import {replaceCamelWithSpaces} from './Components/ComponentsWithTest/Button'
import ComponentsIndex from './Components/ComponentsWithTest/ComponentsIndex';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('button has correct initial color, and updates when click', () => {
  const {container} =  render(<Button />);
  logRoles(container);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  // false positive test
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})

  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<ComponentsIndex />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('color button disabled after check box click and enables on second click', () => {
  render(<ComponentsIndex />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled()
  //expect(colorButton).toHaveStyle({backgroundColor:'gray'})

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled()
  //expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // not implement the style thing yet
})

test('color button disabled after check box click and enables on second click', () => {
  render(<ComponentsIndex />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({backgroundColor:'gray'})

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multile inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });


})