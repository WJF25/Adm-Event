import styled from "styled-components";

export const Button = styled.button`
  display: block;
  outline: none;
  border: 1px solid;
  border-color: white;
  border-radius: 8px;
  margin: 8px auto;
  background-color: #139f43;
  color: white;
  padding: 0.5em 2em;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.527);
  width: 80%;
  font-size: 1rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: opacity 0.4s linear, color 0.4s linear,
    background-color 0.4s linear;

  &:hover {
    filter: brightness(80%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.527);
    transform: translateY(2px);
  }

  &:active {
    filter: brightness(80%);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.527);
    transform: translateY(4px);
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 10px auto;
`;
