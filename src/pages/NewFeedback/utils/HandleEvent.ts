import { useState } from 'react';
import { NewFeedbackValue } from '../NewFeedback.types';
import { useNavigate } from 'react-router-dom';

export const HandleEvent = () => {
  const [isEmpty, setIsEmpty] = useState(false);
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
    const detailValue = evt.target.value;
    setValue({ ...value, Detail: detailValue });
    setIsEmpty(detailValue === '');
  };

  const handleClickAddFeedback = () => {
    if (value.Detail === '') {
      setIsEmpty(!isEmpty);
      return;
    } else {
      navigate('/');

      localStorage.setItem(
        'AddFeedback Title and Detail',
        JSON.stringify(value)
      );
      localStorage.setItem(
        'AddFeedback DropDown',
        JSON.stringify(selectDropDown)
      );
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return {
    handleChageTitle,
    handleChageDetail,
    handleClickAddFeedback,
    setSelectDropDown,
    isEmpty,
    selectDropDown,
    value,
    handleCancel,
  };
};
