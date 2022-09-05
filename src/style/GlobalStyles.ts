import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.App {
  width: 100vw;
  height: 100vh;
  background-color: ${({theme})=> theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
}
body, html {
  margin: 0px;
}
`;