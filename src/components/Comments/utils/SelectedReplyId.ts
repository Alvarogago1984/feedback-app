import { useState } from 'react';
import { UserInterface } from '../../../types/FetchGetValue.type'

export const SelectedReplyId = () => {
  const [selectedReplyId, setSelectedReplyId] = useState<UserInterface | null |string |number>(null);

  const handleClickReply = (id: UserInterface | number) => {
    if (selectedReplyId === id) {
      setSelectedReplyId(null);
    } else {
      setSelectedReplyId(id);
    }
  };
  const handleClickReplies = (username:UserInterface | string  ) => {
    if (selectedReplyId === username) {
      setSelectedReplyId(null);
    } else {
      setSelectedReplyId(username);
    }
  };

  return { selectedReplyId, handleClickReply, handleClickReplies };
};
