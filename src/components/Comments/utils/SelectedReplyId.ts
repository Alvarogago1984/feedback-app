import { useState } from 'react';

type SelectType = number | string | null;

export const SelectedReplyId = () => {
  const [selectedReplyId, setSelectedReplyId] = useState<SelectType>(null);

  const handleClickReply = (id: SelectType) => {
    if (selectedReplyId === id) {
      setSelectedReplyId(null);
    } else {
      setSelectedReplyId(id);
    }
  };
  const handleClickReplies = (username: SelectType) => {
    if (selectedReplyId === username) {
      setSelectedReplyId(null);
    } else {
      setSelectedReplyId(username);
    }
  };

  return { selectedReplyId, handleClickReply, handleClickReplies };
};
