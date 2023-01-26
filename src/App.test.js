import { color } from '@mui/system';
import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

import Button from './Components/ComponentsWithTest/Button';
import ComponentsIndex from './Components/ComponentsWithTest/ComponentsIndex';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('button has correct initial color, and updates when click', () => {
  const {container} =  render(<Button />);
  logRoles(container);

  // find an element with a role of button and text 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // false positive test
  expect(colorButton).toHaveStyle({backgroundColor: 'reddddd'})

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<ComponentsIndex />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('color button disabled after check box', () => {
  render(<ComponentsIndex />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled()
  

})

test('button has correct initial text', () => {
  render(<Button />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

});

test('button turns blue when clicked', () => {
  render(<Button />);
  let colorButton = screen.getByRole('button', {name: 'Change to blue'})


});