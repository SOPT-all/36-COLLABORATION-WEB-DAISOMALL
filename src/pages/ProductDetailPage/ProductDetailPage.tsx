/** @jsxImportSource @emotion/react */
import Header from '@components/Header/Header';
import ImageCarousel from '@components/ImageCarousel/ImageCarousel';
import ProductPageInfo from '../ProductPage/components/ProductPageInfo';
import ReviewCarousel from './ReviewCarousel/ReviewCarousel';
import PickupInfo from './PickupInfo/PickupInfo';
import PerkInfo from './PerkInfo/PerkInfo';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
import NavBar from './NavBar/NavBar';
import BrandInfo from './BrandInfo/BrandInfo';
import ViewMoreButton from '@components/buttons/viewMoreButton/ViewMoreButton';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import * as S from './ProductDetailPage.style';
import theme from '@styles/theme';
import Divider from '@components/common/divider/Divider';
import DividerThick from '@components/common/divider/DividerThick';
import { useState, useRef, useEffect } from 'react';
import BottomCarousel from './components/Carousel/BottomCarousel';
import Review from './components/Review/Review';
import TodayDiscovery from './components/TodayDiscovery/TodayDiscovery';
import Accordion from './components/Accordion/Accordion';
import BuyBar from './components/BuyBar/BuyBar';

const ProductDetailPage = () => {
  // 예시 데이터
  const productTitle = '다이소 베이직 노트북 파우치 15인치';
  
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772'
  ];

  const reviewImages = [
    'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
  ];

  const handleExpandImage = () => {
    setIsImageExpanded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navBarRef.current) {
        const navBarPosition = navBarRef.current.getBoundingClientRect().top;
        setIsNavBarSticky(navBarPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={S.productDetailStyle}>
      {/* 1. 헤더 */}
      <Header 
        showBackButton={true} 
        showTitle={true} 
        title={productTitle} 
        showSearchIcon={true} 
        showCartIcon={true} 
        showHomeIcon={true}
      />

      {/* 2. 이미지 캐러셀 */}
      <ImageCarousel images={carouselImages} height="50rem" />

      {/* 3. 상품 정보 */}
      <ProductPageInfo />

      {/* 4. 리뷰 캐러셀 */}
      <ReviewCarousel imageUrls={reviewImages} onMoreClick={() => console.log('리뷰 더보기 클릭')} />

      <Divider />

      {/* 5. 픽업 정보 */}
      <PickupInfo />

      <Divider />

      {/* 6. 혜택 정보 */}
      <PerkInfo />

      <DividerThick />

      {/* 7. 상품 카드 (수직형) */}
      <div css={S.recommendedProductsStyle}>
        <SectionTitle 
          title1="다른 고객이 함께 본 상품"
          onClickAll={() => console.log('이런 상품은 어때요? 전체보기 클릭')}
        />
        <ProductCardVertical 
          size="96"
          name="다이소 베이직 노트북 파우치 15인치"
          totalPrice="5,000"
          unitPrice="5,000"
          imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          tags={[{ label: '베스트', bg: '#FF5C5C', color: '#FFFFFF' }]}
        />
      </div>

      <DividerThick />

      {/* 8. 이미지 캐러셀 (두번째) */}
      <ImageCarousel 
        images={carouselImages.slice(0, 2)} 
        autoplay={false}
        height="8rem"
      />

      <DividerThick />

      {/* 9. 네비게이션 바 */}
      {isNavBarSticky && (
        <div css={S.stickyNavBarStyle}>
          <NavBar />
        </div>
      )}
      <div ref={navBarRef}>
        <NavBar />
      </div>

      <Divider />

      {/* 10. 브랜드 정보 */}
      <BrandInfo 
        brandName="다이소"
        brandDescription="일상을 다채롭게, 가격은 합리적으로! 다이소의 다양한 상품들을 만나보세요."
        brandImageUrl="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        isLoading={false}
      />

      {/* 11. 이미지 영역 */}
      <div css={[S.imageContainerStyle, isImageExpanded ? S.expandedImageStyle : S.collapsedImageStyle]}>
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2" 
          alt="상품 상세 이미지"
          style={{ width: '100%', objectFit: 'cover' }}
        />

        {/* 12. 네비게이션 버튼 */}
        {!isImageExpanded && (
          <div css={S.viewMoreButtonWrapper}>
            <ViewMoreButton 
              buttonText="상품 상세 정보" 
              onExpand={handleExpandImage}
            >
              <div>상품 상세 정보 내용</div>
            </ViewMoreButton>
          </div>
        )}
      </div>

      <DividerThick />

      {/* 13 & 14. 추천 상품 (ProductCardVertical 두 개) */}
      <div css={S.recommendedProductsStyle}>
        <SectionTitle 
          title1="VT"
          title2="브랜드 상품 모아보기"
          title1Color={theme.colors['gray-03']}
          onClickAll={() => console.log('브랜드 상품 모아보기 클릭')}
          image={
            <img 
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f" 
              alt="VT 브랜드" 
              style={{ width: '3.2rem', height: '3.2rem', borderRadius: '50%', objectFit: 'cover' }}
            />
          }
        />
        <ProductCardVertical 
          size="96"
          name="다이소 미니 멀티탭 1.5m"
          totalPrice="3,000"
          imageUrl="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
          tags={[{ label: '신상', bg: theme.colors['gray-05'], color: theme.colors['primary'] }]}
        />
      </div>

      <DividerThick />

      <div css={S.recommendedProductsStyle}>
        <SectionTitle 
          title1="이런 기초스킨케어 상품은 어때요?"
          onClickAll={() => console.log('이런 기초스킨케어 상품은 어때요? 전체보기 클릭')}
        />
        <ProductCardVertical 
          size="96"
          name="다이소 LED 무드등"
          totalPrice="5,000"
          imageUrl="https://images.unsplash.com/photo-1543508282-6319a3e2621f"
          tags={[{ label: '인기', bg: theme.colors['primary'], color: theme.colors['gray-05'] }]}
        />
      </div>

      <DividerThick />
      
      <TodayDiscovery />
      <Divider height="8px" color={theme.colors['gray-06']} />
      <BottomCarousel />
      <Divider height="8px" color={theme.colors['gray-06']} />
      <Review />
      <Divider height="8px" color={theme.colors['gray-06']} />
      <Accordion />
      <BuyBar />
    </div>
    
  );
};

export default ProductDetailPage;
