import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 656px;
  h1 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    color: ${(props) => props.theme.colors.blue};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${(props) => props.theme.colors.black};
    max-width: 560px;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.4;
  }
  a {
    display: block;
    margin-top: 5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-decoration: none;
    font-weight: bold;
  }
  @media (max-width: 992px) {
    padding: 1rem;
  }
`;

export const ImagesContainer = styled.section`
  display: flex;
  align-content: center;
  margin-bottom: 3rem;
  div + div {
    margin-left: calc(-140px / 2);
  }
`;

export const ImageContainer = styled.div`
  width: 250%;
  max-width: 180px;
  height: 140px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  img {
    object-fit: contain;
    padding: 0.75rem;
  }

  p {
    position: relative;
    font-size: 12px;
  }
`;
