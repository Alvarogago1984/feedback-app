import styled from 'styled-components'

export const FilterDiv = styled.section`
  width: 255px;
  height: 166px;
  border-radius: 10px;
  background: var(--color-White);
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-content: flex-start;
  padding-left: 24px;

  @media (width< 1120px) {
    width: 223px;
    height: 178px;
  }
  @media (width< 690px) {
    display: none;
    width: 0px;
    height: 0px;
  }
`
export const TextSpan = styled.span`
  color: var(--color-SecondaryBlue);
  font-size: 13px;
  font-weight: 600;
`
export const ButtonUp = styled.button`
  border-radius: 10px;
  background-color: var(--color-LightGreyBlue);
  width: 48px;
  height: 30px;
  margin-right: 8px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: var(--color-SecondaryBlue);
    ${TextSpan} {
      color: var(--color-LightGreyBlue);
      background-color: var(--color-SecondaryBlue);
    }
  }
`
export const ButtonMiddleBig = styled(ButtonUp)`
  width: 111px;
  margin-top: 14px;
`
export const ButtonMiddleSmall = styled(ButtonUp)`
  width: 56px;
  margin-top: 14px;
  margin-left: 14px;
`
export const ButtonBottonSmall = styled(ButtonUp)`
  width: 77px;
  margin-top: 14px;
`
