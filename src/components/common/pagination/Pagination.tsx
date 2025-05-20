import React, { useRef } from 'react';
import * as S from './Pagination.style';

interface PaginationProps {
  contents: { id: number; content: string }[];
  currentPage: number;
  onPageChange: (page: number) => void;
  isActive?: boolean;
  isHome?: boolean;
  enableSwipe?: boolean;
}

const SWIPE_THRESHOLD = 50;

// 슬라이드 영역 분리
function SlideBox({ contents, currentPage }: Pick<PaginationProps, 'contents' | 'currentPage'>) {
  return (
    <div css={S.slideWrapper}>
      <div css={S.slideTrack(currentPage)}>
        {contents.map(item => (
          <div key={item.id} css={S.slideItem}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// 페이지네이션 바 분리
function PaginationBar({
  totalPages,
  currentPage,
  isActive,
  isHome,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  isActive: boolean;
  isHome: boolean;
  onPageChange: (page: number) => void;
}) {
  return (
    <div css={S.paginationWrapperStyle(isHome)}>
      <div css={S.paginationBarsContainer}>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            css={S.paginationBarStyle((isHome ? 1 : currentPage) === index + 1, isActive && !isHome)}
            onClick={() => isActive && !isHome && onPageChange(index + 1)}
            role={isActive && !isHome ? 'button' : undefined}
            aria-label={isActive && !isHome ? `페이지 ${index + 1}로 이동` : undefined}
            tabIndex={isActive && !isHome ? 0 : -1}
            style={{ pointerEvents: isHome ? 'none' : 'auto' }}
          />
        ))}
      </div>
    </div>
  );
}

function Pagination(props: PaginationProps) {
  const {
    contents,
    currentPage,
    onPageChange,
    isActive = false,
    isHome = false,
    enableSwipe = false,
  } = props;
  const totalPages = contents.length;
  const startX = useRef<number | null>(null);

  // 스와이프/드래그 핸들러
  const swipeHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      if (!enableSwipe) return;
      startX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (!enableSwipe || startX.current === null) return;
      const diffX = startX.current - e.changedTouches[0].clientX;
      if (Math.abs(diffX) > SWIPE_THRESHOLD) {
        if (diffX > 0) onPageChange(currentPage === totalPages ? 1 : currentPage + 1);
        else onPageChange(currentPage === 1 ? totalPages : currentPage - 1);
      }
      startX.current = null;
    },
    onMouseDown: (e: React.MouseEvent) => {
      if (!enableSwipe) return;
      startX.current = e.clientX;
    },
    onMouseUp: (e: React.MouseEvent) => {
      if (!enableSwipe || startX.current === null) return;
      const diffX = startX.current - e.clientX;
      if (Math.abs(diffX) > SWIPE_THRESHOLD) {
        if (diffX > 0) onPageChange(currentPage === totalPages ? 1 : currentPage + 1);
        else onPageChange(currentPage === 1 ? totalPages : currentPage - 1);
      }
      startX.current = null;
    },
  };

  return (
    <div {...swipeHandlers}>
      <SlideBox contents={contents} currentPage={currentPage} />
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        isActive={isActive}
        isHome={isHome}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Pagination;