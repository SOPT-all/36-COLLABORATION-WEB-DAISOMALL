export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_PRODUCTS_SEARCH: '/api/v1/products/search',
  GET_PRODUCTS_ID: (productId: number) => `/products/${productId}`,
  GET_PRODUCTS_POPULAR: '/api/v1/products/popular',
  GET_PRODUCTS_SORT: (keyword: string) => `/api/v1/products/search/${keyword}/sort`,
} as const;