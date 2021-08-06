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
  }

  span {
    color: rgba(36, 120, 246, 0.822);
    text-transform: uppercase;
    font-weight: 800;
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
