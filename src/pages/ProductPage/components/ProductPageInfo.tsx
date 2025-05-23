/** @jsxImportSource @emotion/react */
import * as S from './ProductPageInfo.style';
import { ShareIcon } from '@assets/svgs';
import ProductHeader from './ProductHeader';
import Rating from './Rating';

const ProductPageInfo = () => (
    <article css={S.ProductInfoWrapper}>
      <section css={S.ProductDetails}>
        <ProductHeader />
        <Rating />
      </section>
      <button type='button' css={S.ShareButton}>
        <ShareIcon css={S.ShareIcon} />
      </button>
    </article>
  );

export default ProductPageInfo; 