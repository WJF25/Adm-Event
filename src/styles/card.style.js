import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  width: 80%;
  min-width: 50%;
  min-height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgba(74, 205, 17, 0.83),
    rgba(24, 34, 250, 0.81)
  );
  padding: 20px;
  animation: sudden 3s ease-out backwards;

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }

  li {
    width: 25%;
    margin: 10px;
    height: 800px;
    padding: 10px;
    box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    background-color: #bdfefbe3;
    justify-content: space-between;
  }

  p {
    color: rgba(6, 153, 6, 0.822);
    text-align: left;
    width: 100%;
    margin: 8px;
  }

  .scrolParagra {
    height: 100px;
    overflow: scroll;
  }

  span {
    color: rgba(36, 120, 246, 0.822);
    text-transform: uppercase;
    font-weight: 800;
  }

  a {
    text-decoration: none;
    margin: 0 auto;
    width: 50%;
    display: block;
    text-align: center;
    font-weight: 700;
    color: #51d151;
    font-size: 18px;
  }

  @keyframes sudden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1100px) {
    li {
      width: 50%;
      max-height: 900px;
    }
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    li {
      width: 100%;
      max-height: 900px;
    }
    a {
      font-size: 13px;
    }
  }
`;
