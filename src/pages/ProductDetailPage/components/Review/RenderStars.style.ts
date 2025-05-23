import { css } from '@emotion/react';

export const StarRatingWrapper = css`
  display: flex;
  width: 9rem;
  padding-bottom: 0.4rem;
`;

export const StarWrapper = css`
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
`;

export const FullStarOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
`;
