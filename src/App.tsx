import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import SearchResultTitle from './components/searchResultTitle/SearchResultTitle';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        
        {/* SearchResultTitle 테스트 */}
        <div 
          css={css`
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
          `}
        >
          {/* 정렬 옵션이 있는 경우 */}
          <div 
            css={css`
              margin: 24px 16px;
            `}
          >
            <h3 css={css`${theme.fonts['heading-16B']} margin-bottom: 16px;`}>
              검색 결과 타이틀 (정렬 옵션 있음)
            </h3>
            <SearchResultTitle 
              totalCount={19} 
              showSortOptions={true}
              onSortChange={() => {}}
            />
          </div>

          {/* 개수만 표시하는 경우 */}
          <div 
            css={css`
              margin: 24px 16px;
            `}
          >
            <h3 css={css`${theme.fonts['heading-16B']} margin-bottom: 16px;`}>
              재고 정보 타이틀 (개수만 표시)
            </h3>
            <SearchResultTitle totalCount={3} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;