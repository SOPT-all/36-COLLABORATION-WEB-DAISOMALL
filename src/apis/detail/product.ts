import { END_POINT } from '@utils/constants/api/api';
import { instance } from '@apis/instance';
import type { GetProductDetailResponseData, GetReviewsResponseData } from '@app-types/product';
import type { ApiResponse } from '@app-types/apiResponseType';

export const getProductDetail = async (
  productId: number,
): Promise<GetProductDetailResponseData> => {
  const response = await instance.get<ApiResponse<GetProductDetailResponseData>>(
    END_POINT.GET_PRODUCTS_ID(productId)
  );
  return response.data.data;
};

export const getReviews = async (
  productId: number,
  pageNumber: number = 0,
  pageSize: number = 20,
): Promise<GetReviewsResponseData> => {
  const response = await instance.get<ApiResponse<GetReviewsResponseData>>(
    END_POINT.GET_REVIEWS,
    {
      params: {
        productId,
        pageNumber,
        pageSize,
      },
    }
  );
  return response.data.data;
};
