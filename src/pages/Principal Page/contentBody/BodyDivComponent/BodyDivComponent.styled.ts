import styled from 'styled-components';

export const BodyDiv = styled.section`
  width: 825px;
 height: 600px;
  border-radius: 10px;
  background-color: var(--color-White);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width < 1120px) {
    max-width: 689px;
  }
  @media (width < 690px) {
    width: 327px;
  }
`;
export const IconSearch = styled.img`
  background-color: var(--color-White);
  margin-bottom: 53.26px;
`;
export const Title = styled.h1`
  background-color: var(--color-White);
  color: var(--color-MidnightBlue);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Description = styled.p`
  color: var(--color-SoftBlueGrey);
  font-size: 16px;
  font-weight: 400;
  background-color: var(--color-White);
  max-width: 410px;
  text-align: center;
  margin-bottom: 48px;
`;
