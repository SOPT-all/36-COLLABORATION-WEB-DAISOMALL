import type { RouteType } from '@app-types/routeType';
import HomePage from '@pages/HomePage/HomePage';
import ProductDetailBottom from '@pages/ProductDetailPage/productDetailBottom';
import ProductDetailPage from '@pages/ProductDetailPage/ProductDetailPage';
import StoreSearchPage from '@pages/StoreSearchPage/StoreSearchPage';
import routePath from '@routes/routePath';

const pageRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <HomePage />,
  },

  {
    path: routePath.STORE_LIST,
    element: <StoreSearchPage />,
  },

  {
    path: routePath.PRODUCT_DETAIL,
    element: <ProductDetailPage />,
  },

  {
    path: routePath.PRODUCT_DETAIL_BOTTOM,
    element: <ProductDetailBottom />,
  },
];

export default pageRoutes;
