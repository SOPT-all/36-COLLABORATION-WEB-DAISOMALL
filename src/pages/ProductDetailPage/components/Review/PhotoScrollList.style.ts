import { css } from '@emotion/react';

export const ScrollContainer = css`
  display: flex;
  gap: 0.8rem;
  padding: 0 0 1.6rem 1.6rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Thumbnail = css`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`;
