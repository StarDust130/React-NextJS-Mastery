import styled from "styled-components";
import GlobalStyle from "./styles/Global";

const H1 = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <H1>Welcome to The Wild Oasis</H1>
      </div>
    </>
  );
}

export default App;
