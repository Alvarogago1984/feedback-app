import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddfeedbackButton } from './AddfeedbackButton';

describe('test component', () => {
  let onClick: jest.Mock<React.MouseEventHandler<HTMLButtonElement>>;


  beforeEach(() => {
    onClick = jest.fn();

  });

  it('render component', () => {
    const content = {
      onclick: onClick,
      isEmpty: false,
      disabled: false,
    };
    render(
      <AddfeedbackButton
        onClick={content.onclick}
        isEmpty={content.isEmpty}
        disabled={content.disabled}
      />
    );
    expect(screen.getByText('Add Feedback')).toBeInTheDocument()
    const component = screen.getByTestId('buttonclick') 
    fireEvent.click(component)
  });

  it('disable true', () => {
    const content = {
      onclick: onClick,
      isEmpty: true,
      disabled: true,
    };
    render(
      <AddfeedbackButton
        onClick={content.onclick}
        isEmpty={content.isEmpty}
        disabled={content.disabled}
      />
    );
    expect(screen.getByText('Add Feedback')).toBeInTheDocument()
 
  });
});
