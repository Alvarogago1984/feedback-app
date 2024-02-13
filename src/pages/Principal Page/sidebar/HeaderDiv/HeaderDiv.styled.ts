import styled from 'styled-components';
import backgroundHeader from '../../../../assets/suggestions/desktop/background-header.png';
import backgroundHeaderTablet from '../../../../assets/suggestions/tablet/background-header.png';

export const HeaderDiv = styled.section`
  height: 137px;
  border-radius: 10px;
  background-image: url(${backgroundHeader});
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  @media (width < 1120px) {
    width: 223px;
    height: 178px;
    background-image: url(${backgroundHeaderTablet});
  }
  @media (width < 690px) {
    background-image: none;
    height: 72px;
    width: inherit;
    border-radius: 0px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const Hamburger = styled.img`
  display: none;
  @media (width < 690px) {
    display: inline;
    margin-bottom: 28px;
    margin-right: 24px;
    cursor: pointer;
  }
`;

export const HeaderText = styled.div`
  @media (width < 690px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  color: var(--color-White);
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  @media (width < 690px) {
    font-size: 15px;
  }
`;
export const SubTitle = styled.h2`
  opacity: 0.75;
  color: var(--color-White);
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 24px;
  margin-left: 24px;
  @media (width < 690px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;
