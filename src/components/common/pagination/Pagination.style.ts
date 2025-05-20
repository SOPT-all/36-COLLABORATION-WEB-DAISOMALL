import { css } from '@emotion/react';
import theme from '@styles/theme';

// 슬라이드 관련 스타일
export const slideWrapper = css`
  width: 320px;
  height: 120px;

  margin: 24px auto 0;

  overflow: hidden;
  border-radius: 8px;
  background: #fafafa;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
`;

export const slideTrack = (currentPage: number) => css`
  display: flex;
  width: 100%;
  height: 120px;

  transform: translateX(-${(currentPage - 1) * 100}%);
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
`;

export const slideItem = css`
  flex: 0 0 100%;
  min-width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 700;
  color: #444;
  background: #fafafa;
`;

// 페이지네이션 바 관련 스타일
export const paginationWrapperStyle = (isHome?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${isHome ? '24px 16px 20px 16px' : '24px 16px 16px 16px'};
`;

export const paginationBarsContainer = css`
  display: flex;
  align-items: center;
`;

export const paginationBarStyle = (isActive: boolean, isClickable?: boolean) => css`
  width: 28px;
  height: 2px;

  background-color: ${isActive ? theme.colors['gray-01'] : theme.colors['gray-05']};
  border-radius: 1px;

  cursor: ${isClickable ? 'pointer' : 'default'};
  transition: background-color 0.2s ease;
`;