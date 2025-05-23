import { useState } from 'react';
import Header from '@components/Header/Header';
import Divider from '@components/common/divider/Divider';
import BottomNav from '@components/BottomNav/BottomNav';
import ChatbotButton from '@components/buttons/floatingButtons/ChatbotButton';
import FloatingUpButton from '@components/buttons/floatingButtons/FloatingUpButton';
import PopularProductsSection from './PopularProductsSection';
import SearchProductsSection from './SearchProductsSection';
import { pageLayoutStyle, contentAreaStyle } from './StoreSearchPage.style';

const StoreSearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };
  
  const handleSearchClear = () => {
    setSearchKeyword('');
  };
  
  return (
    <div css={pageLayoutStyle}>
      <Header showBackButton showTitle title="매장 상품 찾기" showCartIcon />
      <Divider />
      
      <div css={contentAreaStyle}>
        {searchKeyword ? (
          <SearchProductsSection 
            initialKeyword={searchKeyword}
            onSearchClear={handleSearchClear}
          />
        ) : (
          <PopularProductsSection onSearch={handleSearch} />
        )}
      </div>
      
      <ChatbotButton />
      <FloatingUpButton />
      <BottomNav />
    </div>
  );
};

export default StoreSearchPage;