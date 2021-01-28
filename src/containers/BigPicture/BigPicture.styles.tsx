import styled from 'styled-components';

const BigPictureStyled = styled.img`
  height: 40vh;
  width: 40vw;
  box-shadow: 1rem 0.5rem 0.5rem black;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const EmptyBigPictureStyled = styled.div`
  height: 40vh;
  width: 40vw;
  box-shadow: 0.5rem 0.5rem 0.5rem, 0.5rem 0.5rem 0.5rem black;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

export { BigPictureStyled, EmptyBigPictureStyled };
