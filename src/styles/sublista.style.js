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
    margin: 20px auto;
    font-size: 20px;
  }

  p {
    text-align: center;
    width: 200%;
  }
`;
