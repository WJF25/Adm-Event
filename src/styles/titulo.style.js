import styled from "styled-components";

export const TitleWedding = styled.h1`
  font-family: "MonteCarlo", cursive;
  font-size: 60px;
  letter-spacing: 10px;
  font-weight: 700;
  margin: 0 auto;
  color: white;
  text-shadow: 2px 5px 5px black, 2px 4px whitesmoke;
  animation: sudden 2s ease-out forwards;
  width: 90%;
  text-align: center;

  @keyframes sudden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    font-size: 40px;
    text-shadow: 2px 5px 5px black, 2px 3px whitesmoke;
  }
`;

export const TitleConfra = styled(TitleWedding)`
  font-family: "Taylor Sans", sans-serif;
  color: #fce5a1;
  text-shadow: 3px 5px 5px black, 4px 5px whitesmoke;
  z-index: 1;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const TitleForma = styled(TitleWedding)`
  font-family: "Champigna", sans-serif;
  color: #9cffcc;
  text-shadow: 3px 5px 5px black, 4px 5px #acff5a;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const WraperHome = styled.h1`
  font-family: "Code New Roman", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  color: #9cffcc;
  text-shadow: 3px 5px 5px black, 4px 5px #acff5a;
  position: relative;
  animation: queda 2s cubic-bezier(0.08, 0.82, 0.17, 1) normal;

  h3 {
    font-family: "Code New Roman", sans-serif;
    font-size: 40px;
    font-weight: 500;
    margin: 0 auto;
    color: #9cffcc;
    width: 70%;
  }
  header {
    background-color: #2966da;
    padding: 5px;
    border: 1px solid black;
    width: 100%;

    img {
      width: 90%;
      margin: 10px auto;
      height: 50vh;
    }
  }

  @keyframes queda {
    0% {
      transform: translateY(-650px);
    }

    100% {
      transform: translateY();
    }
  }

  @media (max-width: 1200px) {
    font-size: 28px;
    text-shadow: 2px 4px 5px black, 3px 3px #acff5a;

    h3 {
      font-size: 30px;
    }
  }

  @media (max-width: 590px) {
    font-size: 20px;
    text-shadow: 2px 4px 5px black, 3px 3px #acff5a;

    h3 {
      font-size: 20px;
    }
  }
`;

export const Header = styled.header`
  padding: 10px;
  background-color: #2966da;

  img {
    width: 90%;
    height: 50vh;
  }
  a {
    color: rgba(36, 120, 246, 0.822);
    text-decoration: none;
    margin: 0 auto;
    width: 50%;
    display: block;
    text-align: center;
    font-weight: 700;
    color: #51d151;
    font-size: 18px;
  }
`;

export const TitleLogin = styled(TitleConfra)`
  color: white;
  text-shadow: 3px 5px 5px black, 4px 5px black;

  @media (max-width: 800px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
