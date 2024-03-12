

export const getLocalStorageCommentValue = () => {

  const comentTextStorage = localStorage.getItem('Comment Feedback');
  const valueStorage = localStorage.getItem('Value current user');

  const storageComment = comentTextStorage ? JSON.parse(comentTextStorage) : '';
  const storageValue = valueStorage ? JSON.parse(valueStorage) : '';


  return { storageComment, storageValue};
};
