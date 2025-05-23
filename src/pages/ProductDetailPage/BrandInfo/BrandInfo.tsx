/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import * as S from './BrandInfo.style';

interface BrandInfoProps {
  brandName: string;
  brandDescription: string;
  brandImageUrl: string;
  isLoading: boolean;
}

const BrandInfo = ({
  brandName,
  brandDescription,
  brandImageUrl,
  isLoading
}: BrandInfoProps) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // isLoading prop이 false로 변경될 때 또는 컴포넌트가 마운트될 때 이미지 로딩 상태 초기화
  useEffect(() => {
    if (!isLoading) {
      setIsImageLoaded(false);
    }
  }, [isLoading]);

  const handleImageError = () => {
    console.error('브랜드 이미지 로딩 실패');
    setImageError(true);
    setIsImageLoaded(true);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // 스켈레톤 UI를 보여주는 함수
  const renderSkeleton = () => (
    <div css={S.contentWrapper}>
      <div css={S.skeletonImageContainer} aria-hidden="true" />
      <div css={S.infoContainer}>
        <div css={S.skeletonBrandName} aria-hidden="true" />
        <div css={S.skeletonBrandDescription} aria-hidden="true" />
      </div>
    </div>
  );

  // 실제 콘텐츠를 보여주는 함수
  const renderContent = () => (
    <div css={S.contentWrapper}>
      <figure css={S.imageContainer}>
        <img 
          css={S.brandImage} 
          src={imageError ? 'https://via.placeholder.com/70' : brandImageUrl} 
          alt={`${brandName} 브랜드 이미지`} 
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      </figure>
      <article css={S.infoContainer}>
        <h2 css={S.brandName}>{brandName}</h2>
        <p css={S.brandDescription}>{brandDescription}</p>
      </article>
    </div>
  );

  return (
    <section css={S.container}>
      {renderContent()}
    </section>
  );
};

export default BrandInfo;