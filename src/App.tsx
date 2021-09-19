import React from 'react';
import AppHeader from './components/AppHeader';
import SearchDeck from './components/SearchDeck';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 900px) {
    & {
      padding: 0px 20px;
    }
  }
`;

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas,
              'Courier New', monospace;
          }
        `}
      />
      <AppContainer>
        <AppHeader title="Lord of the APIS" />
        <SearchDeck />
      </AppContainer>
    </>
  );
}

export default App;
