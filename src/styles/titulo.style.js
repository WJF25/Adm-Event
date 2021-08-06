import styled from "styled-components";

export const TitleWedding = styled.h1`
  font-family: "MonteCarlo", cursive;
  font-size: 60px;
  letter-spacing: 10px;
  font-weight: 700;
  margin: 0;
  color: white;
  text-shadow: 2px 5px 5px black, 2px 4px whitesmoke;
  animation: sudden 1s ease-out forwards;

  @keyframes sudden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TitleConfra = styled.h1`
  font-family: "Taylor Sans", sans-serif;
  font-size: 60px;
  letter-spacing: 10px;
  font-weight: 700;
  margin: 0;
  color: #fce5a1;
  text-shadow: 3px 5px 5px black, 4px 5px whitesmoke;
  z-index: 1;

  animation: sudden 1s ease-out forwards;

  @keyframes sudden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TitleForma = styled.h1`
  font-family: "Champigna", sans-serif;
  font-size: 60px;
  letter-spacing: 10px;
  font-weight: 700;
  margin: 0;
  color: #9cffcc;
  text-shadow: 3px 5px 5px black, 4px 5px #acff5a;

  animation: sudden 1s ease-out forwards;

  @keyframes sudden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
    margin: 0;
    color: #9cffcc;
  }
  header {
    background-color: #2966da;
    padding: 20px;
  }

  @keyframes queda {
    0% {
      transform: translateY(-650px);
    }

    100% {
      transform: translateY();
    }
  }
`;

export const Header = styled.header`
  padding: 20px;
  background-color: #2966da;
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
`;
