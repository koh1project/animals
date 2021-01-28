import styled from 'styled-components';

const styles = `
  height: 40vh;
  width: 40vw;
  box-shadow: 1rem 0.5rem 0.5rem black;

  margin: 10rem auto 5rem auto;
`;

const BigPictureStyled = styled.img`
  ${styles}
`;

const EmptyBigPictureStyled = styled.div`
  ${styles}
`;

export { BigPictureStyled, EmptyBigPictureStyled };
