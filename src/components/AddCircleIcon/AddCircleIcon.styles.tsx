import styled from 'styled-components';

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SvgImage = styled.svg`
  height: 80%;
  width: 80%;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1rem 2rem rgba(#000000, 0.1);
    border: 1px solid #000000;
    padding: 3px 5px;
  }
  &:active {
    transform: translateY(3px);
    box-shadow: 0 0.5rem 1rem rgba(#000000, 0.2);
  }
`;
