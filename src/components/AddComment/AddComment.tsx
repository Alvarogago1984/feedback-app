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
import { IAddcommetn } from './AddComment.type';

export const AddComment = ({
  handleChangePost,
  valueCaracters,
  texto,
  handleChange,
}: IAddcommetn) => {
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
        <ContainerButton data-testid= 'buttonclick' onClick={handleChangePost}>
          <ButtonText>{POST_COMMENT}</ButtonText>
        </ContainerButton>
      </ContainerCharactersButton>
    </ContaierAddComment>
  );
};
