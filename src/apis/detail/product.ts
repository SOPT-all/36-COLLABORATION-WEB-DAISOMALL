import { END_POINT } from '@utils/constants/api/api';
import { instance } from '@apis/instance';
import type { GetProductDetailResponseData } from '@app-types/product';
import type { ApiResponse } from '@app-types/apiResponseType';

export const getProductDetail = async (
  productId: number,
): Promise<GetProductDetailResponseData> => {
  const response = await instance.get<ApiResponse<GetProductDetailResponseData>>(
    END_POINT.GET_PRODUCTS_ID(productId)
  );
  return response.data.data;
};
