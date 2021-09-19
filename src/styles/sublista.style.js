import styled from "styled-components";

export const Sublista = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 100%;
  padding: 0;
  justify-content: space-evenly;

  li {
    color: rgba(16, 109, 31, 0.822);
    width: 100%;
    height: 10%;
  }

  a {
    color: rgba(36, 120, 246, 0.822);
    text-decoration: none;
    margin: 30px auto;
    font-size: 20px;
    border: 1px solid rgba(36, 120, 246, 0.822);
    padding: 10px;
    border-radius: 8px;
  }
  a:hover {
    background-color: rgba(36, 120, 246, 0.822);
    color: white;
    border-color: white;
  }

  p {
    text-align: center;
    width: 100%;
    overflow-y: scroll;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: 50%;
    margin: 0 auto;
    height: 200px;

    li {
      width: 83%;
      margin: 5px auto;
      font-size: 12px;
    }
  }
`;
