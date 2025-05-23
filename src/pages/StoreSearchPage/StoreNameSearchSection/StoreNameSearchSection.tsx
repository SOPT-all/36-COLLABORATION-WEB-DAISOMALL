import { useState, useMemo } from 'react';
import { useStoresByProduct } from '@hooks/queries/useStoresByProduct';
import type { FilterOption } from '@components/tabs/FilterTabs';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import StoreSearchBar from '../components/StoreSearchBar/StoreSearchBar';
import LocationCardList from '@pages/StoreSearchPage/StoreNameSearchSection/LocationCardList/LocationCardList';
import FilterTabs from '@components/tabs/FilterTabs';
import * as S from '@pages/StoreSearchPage/StoreNameSearchSection/StoreNameSearchSection.style';
interface StoreNameSearchSectionProps {
  product: {
    productId: number;
    name: string;
    imageUrl: string;
    price: string;
    code?: string;
  };
}

const StoreNameSearchSection = ({ product }: StoreNameSearchSectionProps) => {
  const [keyword, setKeyword] = useState('');
  const [filters, setFilters] = useState<FilterOption[]>([]);

  const trimmedKeyword = keyword.trim();

  const { data: stores = [], isLoading } = useStoresByProduct({
    productId: product.productId,
    keyword: trimmedKeyword === '' ? undefined : trimmedKeyword,
  });

  const handleStoreSearch = (value: string) => {
    setKeyword(value);
  };

  const handleFilterChange = (selected: FilterOption[]) => {
    setFilters(selected);
  };

  const filteredStores = useMemo(
    () =>
      stores.filter(
        (store) =>
          !(
            (filters.includes('pickup-able') && !store.isPickupAvailable) ||
            (filters.includes('no-soldout') &&
              (store.stockCount === 0 || store.stockStatus === '재고 소진')) ||
            (filters.includes('no-store') &&
              (store.storeType === 'FRANCHISE' ||
                store.storeType === 'DISTRIBUTION'))
          ),
      ),
    [stores, filters],
  );

  return (
    <div css={S.storeSectionWrapper}>
      <SearchBar placeholder="상품명, 품번, 브랜드" />
      <div css={S.productWrapper}>
        <ProductCardRanking
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          code={product.code}
          showCartIcon
        />
      </div>
      <StoreSearchBar onSearch={handleStoreSearch} />
      <div css={S.filterTabWrapper}>
        <FilterTabs onChange={handleFilterChange} />
      </div>
      {!isLoading && <LocationCardList stores={filteredStores} />}
    </div>
  );
};

export default StoreNameSearchSection;
