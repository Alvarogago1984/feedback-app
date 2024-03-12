import React, { useState, useEffect } from 'react';
import { getItemLocalStorage } from '../../services/getItemLocalStorage';
import { FetchGetValueBody } from '../../services/FetchGetValue';

import { ProductRequestInterface } from '../../types/FetchGetValue.type';

export const UtilsApp = () => {
  const { addFeedbackTitleDetail, addFeedbackSelect } = getItemLocalStorage();
  const { valueFetch } = FetchGetValueBody();
  const [clickValue, setClickValue] = useState<string>('All');
  const [valueApi, setValueApi] = useState<ProductRequestInterface[]>([]);
  const [select, setSelect] = useState<string | undefined>('');
  const [upVotesValue, setUpVotesValue] = useState<string>('Most Upvotes');

  useEffect(() => {
    if (clickValue === 'All') {
      setValueApi(valueFetch?.productRequests || []);
      setSelect(addFeedbackSelect);
    } else {
      const filteredData = valueFetch?.productRequests.filter(
        (item: { category: string }) => item.category === clickValue
      );
      setValueApi(filteredData || []);
      setSelect(addFeedbackSelect === clickValue ? addFeedbackSelect : '');
    }
  }, [clickValue, valueFetch, addFeedbackSelect]);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLElement;
    setClickValue(target.innerText);
  };
  return {
    addFeedbackTitleDetail,
    valueApi,
    select,
    upVotesValue,
    setUpVotesValue,
    handleClick,
    valueFetch,
  };
};
