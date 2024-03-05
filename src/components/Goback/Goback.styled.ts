import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerBack = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
export const TitleBack = styled.h4`
  color: var(--color-SoftBlueGrey);
  font-size: 14px;
  font-weight: 700;
  padding-left: 15px;
`;