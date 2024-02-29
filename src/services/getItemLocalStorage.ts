export const getItemLocalStorage = () => {
  
  const storageItemTitleDetail = localStorage.getItem(
    'AddFeedback Title and Detail'
  );
  const storageItemSelect = localStorage.getItem('AddFeedback DropDown');

  const addFeedbackTitleDetail = storageItemTitleDetail
    ? JSON.parse(storageItemTitleDetail)
    : '';
  
  const addFeedbackSelect = storageItemSelect
    ? JSON.parse(storageItemSelect)
    : '';

  return { addFeedbackTitleDetail, addFeedbackSelect };
};
