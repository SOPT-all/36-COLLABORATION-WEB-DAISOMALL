export interface ProductImageInfo {
  productImageId: number;
  imageUrl: string;
  sortOrder: number;
}

export interface GetProductDetailResponseData {
  productId: number;
  productName: string;
  price: string;
  ratingAvg: string;
  reviewCount: string;
  brandName: string;
  productImages: {
    main: ProductImageInfo[];
    detail: ProductImageInfo[];
  };
}

// 리뷰 API 관련 타입들
export interface ReviewImageInfo {
  reviewImageId: number;
  imageUrl: string;
  isMain: boolean;
  sortOrder: number;
}

export interface Review {
  reviewId: number;
  nickname: string;
  profileImageUrl: string;
  rating: number;
  content: string;
  images: ReviewImageInfo[];
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  isLast: boolean;
}

export interface GetReviewsResponseData {
  reviews: Review[];
  pageable: Pageable;
}
