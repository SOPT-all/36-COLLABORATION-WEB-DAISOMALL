import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import SearchEmptyResult from './components/searchEmptyResult/SearchEmptyResult';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        
        {/* SearchEmptyResult 컴포넌트 테스트 */}
        <div 
          css={css`
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          `}
        >
          <SearchEmptyResult />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;