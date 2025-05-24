import { useState, useMemo } from 'react';
import { useStoresByProduct } from '@hooks/queries/useStoresByProduct';
import type { FilterOption } from '@components/tabs/FilterTabs';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import StoreSearchBar from '@pages/StoreSearchPage/components/StoreSearchBar/StoreSearchBar';
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
  onTabSelect?: (tab: string) => void;
  selectedTab?: string | null;
  onSearchClear?: () => void;
  keyword: string;
  setKeyword: (value: string) => void;
  onProductSearch?: (keyword: string) => void; // ✅ 추가
}

const StoreNameSearchSection = ({
  product,
  onTabSelect,
  selectedTab,
  onSearchClear,
  keyword,
  setKeyword,
  onProductSearch,
}: StoreNameSearchSectionProps) => {
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [storeNameKeyword, setStoreNameKeyword] = useState('');

  const handleStoreNameSearch = (value: string) => {
    setStoreNameKeyword(value);
  };

  const handleProductSearch = (value: string) => {
    if (value.trim() === '') return;
    onProductSearch?.(value);
  };

  const handleClear = () => {
    setKeyword('');
    onSearchClear?.();
  };

  const handleFilterChange = (selected: FilterOption[]) => {
    setFilters(selected);
    if (onTabSelect) {
      onTabSelect(selected.length > 0 ? selected[0] : '');
    }
  };

  const trimmedKeyword = keyword.trim();
  const { data: stores = [], isLoading } = useStoresByProduct({
    productId: product.productId,
    keyword: trimmedKeyword === '' ? undefined : trimmedKeyword,
  });

  const filteredStores = useMemo(
    () =>
      stores.filter((store) => {
        const matchPickup =
          !filters.includes('pickup-able') || store.isPickupAvailable;
        const matchStock =
          !filters.includes('no-soldout') ||
          (store.stockCount > 0 && store.stockStatus !== '재고 소진');
        const matchName =
          storeNameKeyword.trim() === '' ||
          store.storeName
            .toLowerCase()
            .includes(storeNameKeyword.trim().toLowerCase());

        return matchPickup && matchStock && matchName;
      }),
    [stores, filters, storeNameKeyword],
  );

  return (
    <div css={S.storeSectionWrapper}>
      <SearchBar
        placeholder="상품명, 품번, 브랜드"
        value={keyword}
        onSearch={handleProductSearch}
        onClear={handleClear}
      />
      <div css={S.productWrapper}>
        <ProductCardRanking
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          code={product.code}
          showCartIcon
        />
      </div>

      <StoreSearchBar onSearch={handleStoreNameSearch} />

      <div css={S.filterTabWrapper}>
        <FilterTabs onChange={handleFilterChange} selectedTab={selectedTab} />
      </div>

      {!isLoading && (
        <LocationCardList
          productId={product.productId}
          stores={filteredStores}
        />
      )}
    </div>
  );
};

export default StoreNameSearchSection;
