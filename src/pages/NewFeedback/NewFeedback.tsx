import { useState } from 'react';
import {
  ContainerNewFeedback,
  ContainerBack,
  TitleBack,
  ContainerCreate,
  ImageCircleFeedback,
  Container,
  Title,
  TitleCategory,
  Subtitle,
  InputFeedback,
  DescriptionDetail,
  ContainerButton,
} from './NewFeedback.styled';
import {
  GO_BACK,
  CREATE_NEW_FEEDBACK,
  FEEDBACK_TITLE,
  DESCRIPTIVE_HEADLINE,
  CATEGORY,
  CHOOSE_CATEGORY,
  FEEDBACK_DETAIL,
  ADDED_COMMENTS,
} from './Constants/NewFeedback.constants';
import IconBack from '../../assets/shared/icon-arrow-left.svg';
import IconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import { CancelButton, AddfeedbackButton } from '../../components/index';
import { DropDown } from './DropDown';
import { NewFeedbackValue } from './NewFeedback.types';
import { useNavigate } from 'react-router-dom';

export const NewFeedback = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<NewFeedbackValue>({
    Title: '',
    Detail: '',
  });
  const [selectDropDown, setSelectDropDown] = useState<string>('Feature');

  const handleChageTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, Title: evt.target.value });
  };

  const handleChageDetail = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue({ ...value, Detail: evt.target.value });
  };

  const handleClickAddFeedback = () => {
    navigate('/');
    
    localStorage.setItem('AddFeedback Title and Detail', JSON.stringify( value));
    localStorage.setItem(
      'AddFeedback DropDown',
      JSON.stringify(selectDropDown)
    );
  };

  return (
    <ContainerNewFeedback>
      <Container>
        <ContainerBack to="/">
          <img src={IconBack} alt="Icon go back" />
          <TitleBack>{GO_BACK}</TitleBack>
        </ContainerBack>
        <ContainerCreate>
          <ImageCircleFeedback
            src={IconNewFeedback}
            alt="Circle New feedback"
          />
          <Title>{CREATE_NEW_FEEDBACK}</Title>
          <TitleCategory>{FEEDBACK_TITLE}</TitleCategory>
          <Subtitle>{DESCRIPTIVE_HEADLINE}</Subtitle>
          <InputFeedback
            type="text"
            onChange={handleChageTitle}
            value={value.Title}
          />
          <TitleCategory>{CATEGORY}</TitleCategory>
          <Subtitle>{CHOOSE_CATEGORY}</Subtitle>
          <DropDown
            selectDropDown={selectDropDown}
            setSelectDropDown={setSelectDropDown}
          />
          <TitleCategory>{FEEDBACK_DETAIL}</TitleCategory>
          <Subtitle>{ADDED_COMMENTS}</Subtitle>
          <DescriptionDetail
            typeof="text"
            onChange={handleChageDetail}
            value={value.Detail}
          />
          <ContainerButton>
            <CancelButton />
            <AddfeedbackButton onClick={handleClickAddFeedback} />
          </ContainerButton>
        </ContainerCreate>
      </Container>
    </ContainerNewFeedback>
  );
};
