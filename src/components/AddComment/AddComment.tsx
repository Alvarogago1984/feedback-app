import {
  ADD_COMMENT,
  PLACEHOLDER,
  CHARACTERS,
  POST_COMMENT,
} from './constants/AddComment.constants';
import {
  ContaierAddComment,
  TextAddcomment,
  TextareaAddcomment,
  ContainerCharactersButton,
  Character,
  ContainerButton,
  ButtonText,
} from './AddComment.styled';
import { useState } from 'react';

export const AddComment = () => {
  const [valueCaracters, setValueCaracters] = useState<number>(250);
  const [texto, setTexto] = useState<string>('');

  const handleChange = (evt: any) => {
    const enteredText = evt.target.value;
    setTexto(enteredText);

    const valueTextoNumber = enteredText.trim().split(' ').filter(Boolean);
    const valuePlus = valueTextoNumber.reduce(
      (acumulador: number, palabraActual: string) =>
        acumulador + palabraActual.length,
      0
    );
    const newValue = 250 - valuePlus;

    setValueCaracters(newValue);
  };

  
  return (
    <ContaierAddComment>
      <TextAddcomment>{ADD_COMMENT}</TextAddcomment>

      <TextareaAddcomment
        placeholder={PLACEHOLDER}
        maxLength={250}
        value={texto}
        onChange={handleChange}
      />
      <ContainerCharactersButton>
        <Character>
          {valueCaracters} {CHARACTERS}
        </Character>
        <ContainerButton >
          <ButtonText>{POST_COMMENT}</ButtonText>
        </ContainerButton>
      </ContainerCharactersButton>
    </ContaierAddComment>
  );
};
