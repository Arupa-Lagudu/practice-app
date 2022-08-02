import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 Button {
  fontSize: 10;
  textTransform: none;
  textAlign: right;
 }
`;

export default Globals;
