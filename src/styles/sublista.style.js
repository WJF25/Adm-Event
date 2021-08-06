import styled from "styled-components";

export const Sublista = styled.ul`
  display: flex;

  align-items: center;
  list-style-type: none;
  width: 100%;
  padding: 0;

  li {
    color: rgba(16, 109, 31, 0.822);
    width: 70%;
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
    width: 300%;
  }
`;
