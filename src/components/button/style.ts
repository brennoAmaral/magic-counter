import styled from "styled-components";

interface WrapperButton {
  width: string;
  height: string;
  border: boolean;
  background: string;
  rounded: boolean;
}

export const WrapperButton = styled.button<WrapperButton>`
  border-color: #62e093;
  border-width: 4px;
  border-style: ${({ border }) => (border ? "solid" : "none")};
  border-radius: ${({ rounded }) => (rounded ? "100%" : "15px")};
  background-color: ${({ background }) => background};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;