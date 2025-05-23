export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_PRODUCTS_SEARCH: '/products/search',
  GET_PRODUCTS_ID: (productId: number) => `/api/v1/products/${productId}`,
  GET_PRODUCTS_POPULAR: '/api/v1/products/popular',
  GET_REVIEWS: '/api/v1/reviews',
} as const;