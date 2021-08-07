import styled from "styled-components";
import party from "../assets/party.png";

export const WrapperLogin = styled.div`
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.796);
  background-image: url(${party});
  margin: 20vh auto;
  position: relative;
  min-height: 40vh;
  animation: fromUp 2s ease-out;

  img {
    position: absolute;
    /* box-shadow: 5px 5px red, 10px 10px blue, 15px 15px green; */
    border-radius: 5%;
    filter: blur(1px);
    width: 70%;
    height: 150%;
  }

  form {
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.664);

    border-radius: 5%;
    margin: 15px;
  }
  h2 {
    color: black;
    z-index: 1;
    font-size: 18px;
    width: 90%;
    text-shadow: 3px 5px 10px white, 4px 5px 5px yellow;
  }

  span {
    color: yellow;
    text-transform: uppercase;
  }

  @keyframes fromUp {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 10px;
      text-shadow: 3px 3px 5px white, 2px 2px 3px yellow;
    }
    img {
      display: none;
    }
  }

  @media (max-width: 490px) {
    h2 {
      font-size: 14px;
      text-shadow: 3px 3px 5px white, 2px 2px 3px yellow;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 14px;
      text-shadow: 4px 4px 6px white, 3px 3px 4px yellow;
    }

    img {
      width: 80%;
      height: 70%;
    }
  }

  @media (min-width: 1500px) {
    h2 {
      font-size: 25px;
      text-shadow: 4px 4px 6px white, 3px 3px 4px yellow;
    }

    img {
      width: 70%;
      height: 150%;
    }
  }
`;
