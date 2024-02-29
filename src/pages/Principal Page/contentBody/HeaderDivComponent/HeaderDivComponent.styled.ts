import styled from 'styled-components';

export const HeaderDiv = styled.section`
  height: 72px;
  background-color: var(--color-DarkBlue);
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (width<1120px) {
    width: 689px;
  }
  @media (width < 690px) {
    width: 100vw;
    border-radius: 0px;
    height: 56px;
    margin-bottom: 32px;
    min-width: 374px;
  }
`;
export const IconLightBulb = styled.img`
  background-color: var(--color-DarkBlue);
  margin-left: 24px;
  flex: 0 0 auto;
  @media (width < 690px) {
    display: none;
  }
`;
export const ValueTextSuggestion = styled.span`
  background-color: var(--color-DarkBlue);
  color: var(--color-White);
  font-size: 18px;
  font-weight: 700;
  padding-right: 5px;
  @media (width < 690px) {
    display: none;
  }
`;
export const OrderList = styled.span`
  background-color: var(--color-DarkBlue);
  color: var(--color-LightGrey);
  opacity: 0.75;
  font-size: 14px;
  font-weight: 400;
  @media (width < 690px) {
    color: var(--color-LightGrey);
  }
`;
export const OrderListValue = styled(OrderList)`
  font-weight: 700;
`;
export const ArrowUp = styled.img`
  background-color: var(--color-DarkBlue);
  padding-left: 8px;
`;
export const ContainerSuggestionsList = styled.button`
  border: none;
  cursor: pointer;
  background-color: var(--color-DarkBlue);
  flex: 1;
  display: flex;
  justify-content: start;
  margin-left: 16px;
  @media (width < 690px) {
    margin-left: 0px;
  }
`;
export const OrderListArrow = styled.div`
  background-color: var(--color-DarkBlue);
  padding-left: 38px;
  @media (width < 690px) {
    margin-left: 24px;
    padding-left: 0px;
  }
`;
