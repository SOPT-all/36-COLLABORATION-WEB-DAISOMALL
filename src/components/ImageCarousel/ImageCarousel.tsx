/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { CarouselContainer, CarouselImage } from './ImageCarousel.style';
import OrderIndicator from '../OrderIndicator/OrderIndicator';
import { IndicatorPositionStyle } from '../OrderIndicator/OrderIndicator.style';

interface ImageCarouselProps {
  images: string[];
  bottomPadding?: string;
  autoSlideInterval?: number;
  autoplay?: boolean;
  height?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  bottomPadding = '1.1rem',
  autoSlideInterval = 5000,
  autoplay = true,
  height,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 자체 구현한 코드와 같은 기능을 하는 react-slick 설정
  const settings = {
    dots: false,
    arrows: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay && !!autoSlideInterval && images.length > 1,
    autoplaySpeed: autoSlideInterval,
    beforeChange: (_: number, nextIndex: number) => {
      setCurrentIndex(nextIndex);
    },
    adaptiveHeight: !height, // height prop이 있으면 adaptiveHeight를 사용하지 않음
  };

  return (
    <div css={CarouselContainer(height)}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              css={CarouselImage(height)}
            />
          </div>
        ))}
      </Slider>
      {images.length > 1 && (
        <div css={IndicatorPositionStyle(bottomPadding)}>
          <OrderIndicator
            currentIndex={currentIndex}
            totalItems={images.length}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
