import styled, {createGlobalStyle, createGlobalStyle} from 'styled-components';
import { Router } from 'react-router-dom';

const GlobalStyle =createGlobalStyle`
html{
  font-family:'IBM Plex Sans', sans-serif; 
}

button, input{
  font-family:'Noto Sans', sans-serif; 
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#root {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
}
`

export const AppContainer = styled.div`
background-color: #fafafa;

width: 428px;
max-width: 100vw;

height: 926px;
max-height: 100vh;
`

export default function App() {
return (
  <AppContainer>
    <GlobalStyle />
    <Router />
  </AppContainer>
);
}
