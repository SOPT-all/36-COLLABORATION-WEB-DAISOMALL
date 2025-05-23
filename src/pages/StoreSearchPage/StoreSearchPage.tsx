import { useState } from 'react';
import Header from '@components/Header/Header';
import Divider from '@components/common/divider/Divider';
import BottomNav from '@components/BottomNav/BottomNav';
import ChatbotButton from '@components/buttons/floatingButtons/ChatbotButton';
import FloatingUpButton from '@components/buttons/floatingButtons/FloatingUpButton';
import StoreNameSearchSection from '@pages/StoreSearchPage/StoreNameSearchSection/StoreNameSearchSection';
import PopularProductsSection from './PopularProductsSection';
import SearchProductsSection from './SearchProductsSection';
import { pageLayoutStyle, contentAreaStyle } from './StoreSearchPage.style';
import { usePopularProducts } from '@hooks/queries/usePopularProducts';

const StoreSearchPage = () => {
  const { data } = usePopularProducts();
  const allProducts = data?.pages ? data.pages.flat() : [];
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<{
    productId: number;
    name: string;
    imageUrl: string;
    price: string;
    code?: string;
  } | null>(null);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleProductSelect = (productId: number) => {
    const found = allProducts.find((p) => p.productId === productId);
    if (!found) return;
    setSelectedProduct({
      productId: found.productId,
      name: found.productName,
      imageUrl: found.mainImage,
      price: found.price.toString(),
      code: found.productCode,
    });
  };

  return (
    <div css={pageLayoutStyle}>
      <Header showBackButton showTitle title="매장 상품 찾기" showCartIcon />
      <Divider />

      <div css={contentAreaStyle}>
        {selectedProduct ? (
          <StoreNameSearchSection product={selectedProduct} />
        ) : searchKeyword ? (
          <SearchProductsSection
            initialKeyword={searchKeyword}
            onSearchClear={() => setSearchKeyword('')}
          />
        ) : (
          <PopularProductsSection
            onSearch={handleSearch}
            onProductSelect={handleProductSelect}
          />
        )}
      </div>

      <ChatbotButton />
      <FloatingUpButton />
      <BottomNav />
    </div>
  );
};

export default StoreSearchPage;
