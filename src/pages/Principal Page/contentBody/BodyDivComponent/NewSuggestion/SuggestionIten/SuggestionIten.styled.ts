import styled from 'styled-components';

export const TitleDescription = styled.h1`
  color: var(--color-MidnightBlue);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  margin-top: 28px;
`;
export const UpvotesText = styled.div`
  color: var(--color-MidnightBlue);
  font-size: 13px;
  font-weight: 700;
  padding: 8px 12.5px 8px 12.5px;
`;
export const Upvotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-LightGrey);
  width: 40px;
  height: 53px;
  flex: 0 0 auto;
  margin: 28px 40px 70px 32px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-SecondaryBlue);
    ${UpvotesText} {
      color: var(--color-White);
    }
  }
`;
export const ContainerSuggestions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 825px;
  height: 151px;
  background: var(--color-White);
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    ${TitleDescription} {
      color: var(--color-SecondaryBlue);
    }
  }
`;
export const UpVotesImg = styled.img`
  padding: 14px 15.67px 0 16.33px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

export const Details = styled.h3`
  color: var(--color-SoftBlueGrey);
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 400;
`;
export const Select = styled.div`
  border-radius: 10px;
  padding: 5px 16px 6px 16px;
  height: 30px;
  background-color: var(--color-LightGreyBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;
export const SelectText = styled.h3`
  color: var(--color-SecondaryBlue);
  font-size: 13px;
  font-weight: 600;
`;
export const Comments = styled.div`
  display: flex;
  align-items: center;
  width: 44px;
  height: 23px;
  gap: 8px;
  margin: 64px 32px 64px 0px;
`;
export const CommentsText = styled.div`
  color: var(--color-MidnightBlue);
  font-size: 16px;
  font-weight: 700;
`;
