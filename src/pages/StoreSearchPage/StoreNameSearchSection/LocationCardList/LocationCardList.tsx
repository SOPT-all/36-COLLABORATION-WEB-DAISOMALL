import LocationCard from '@components/LocationCard/LocationCard';
import { isStoreOpen } from '@utils/time';
import type { LocationCardDataType } from '@app-types/store';

interface LocationCardListProps {
  stores: LocationCardDataType[];
  productId: number;
}

const LocationCardList = ({ stores, productId }: LocationCardListProps) => (
  <>
    {stores.map((store) => (
      <LocationCard
        key={store.storeId}
        productId={productId}
        storeName={store.storeName}
        address={store.location}
        time={store.openingHours}
        floor={store.floor}
        stand={String(store.shelfNo)}
        stock={store.stockCount}
        isPickupAvailable={store.isPickupAvailable}
        isSoldOut={store.stockStatus === '재고 소진' || store.stockCount === 0}
        isFranchise={store.stockStatus === '재고 소진'}
        distance={'5km'}
        isOpen={isStoreOpen(store.openingHours)}
      />
    ))}
  </>
);

export default LocationCardList;
