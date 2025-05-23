import { useQuery } from '@tanstack/react-query';
import { getProductSortOptions } from '@apis/search/product';

export const useProductSortOptions = (keyword: string) => 
  useQuery<string[]>({
    queryKey: ['productSortOptions', keyword],
    queryFn: () => getProductSortOptions(keyword),
    enabled: !!keyword, // 검색어가 있을 때만 쿼리 실행
  });