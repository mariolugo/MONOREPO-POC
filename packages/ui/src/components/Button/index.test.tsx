import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button test', () => {
  test('should render component', () => {
    // Act
    render(<Button>Submit</Button>);

    const button = screen.getByText(/submit/i);

    // Assert
    expect(button).toBeInTheDocument();
  });

  test('should call handle on click', () => {
    // Arrange
    const handleClick = jest.fn();

    // Act
    render(<Button onClick={handleClick}>Submit</Button>);
    const button = screen.getByText(/submit/i);
    userEvent.click(button);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
