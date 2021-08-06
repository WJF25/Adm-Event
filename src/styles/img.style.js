import styled from "styled-components";

export const Img = styled.img`
  width: 30%;
  height: 30%;
  filter: sepia(20%);

  &:hover {
    background-color: rgb(241, 241, 219);

    z-index: 1;
  }
`;
