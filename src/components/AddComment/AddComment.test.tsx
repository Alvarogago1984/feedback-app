import { fireEvent, render, screen } from '@testing-library/react';
import { AddComment } from './AddComment';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('test button', () => {
  let handleChangePost: jest.Mock<React.MouseEventHandler<HTMLDivElement>>;
  let handleChange: jest.Mock<React.ChangeEvent<HTMLTextAreaElement>>;

  beforeEach(() => {
    handleChangePost = jest.fn();
    handleChange = jest.fn();

  });

  it('render component', () => {
  
    const content = {
      handleChangePost: handleChangePost,
      valueCaracters: 2,
      texto: 'hola',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        valueCaracters={content.valueCaracters}
        texto={content.texto}
        handleChange={content.handleChange}
      />
    );
 
  });

  it('render text and textarea', () => {
    const content = {
      handleChangePost: handleChangePost,
      valueCaracters: 20,
      texto: 'hola',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        valueCaracters={content.valueCaracters}
        texto={content.texto}
        handleChange={content.handleChange}
      />
    );

    const text = screen.getByText('hola');
    const textAddcomment = screen.getByText('Add Comment');
    const placeholder = screen.getByPlaceholderText('Type your comment here');
    const caracters = screen.getByText('20 Characters left');
    const postComment = screen.getByText('Post Comment');

    expect(text).toBeInTheDocument();
    expect(textAddcomment).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    userEvent.type(placeholder, 'nuevo comentario')
    expect(handleChange).toHaveBeenCalled()
    expect(placeholder).toHaveAttribute('maxLength', '250');
    expect(caracters).toBeInTheDocument();
    expect(postComment).toBeInTheDocument();
  });

  it('render click button', ()=>{
    const content = {
      handleChangePost: handleChangePost,
      valueCaracters: 20,
      texto: 'hola',
      handleChange: handleChange,
    };
    render(
      <AddComment
        handleChangePost={content.handleChangePost}
        valueCaracters={content.valueCaracters}
        texto={content.texto}
        handleChange={content.handleChange}
      />
    )

    const button = screen.getByTestId('buttonclick')
    fireEvent.click(button)
    expect(handleChangePost).toHaveBeenCalled()
  })

});
