import React, { useState } from 'react';
import * as S from './SearchResultTitle.style';
import SmallArrowDownIcon from '@assets/svgs/SmallArrowDownIcon';

// 정렬 옵션 타입 정의
type SortOption = '신상품' | '가격높은' | '가격낮은';

// 정렬 옵션 목록
const SORT_OPTIONS: SortOption[] = [
  '신상품',
  '가격높은',
  '가격낮은'
];

interface SearchResultTitleProps {
  totalCount: number;
  initialSortOption?: SortOption;
  onSortChange?: (option: SortOption) => void;
  showSortOptions?: boolean;
  className?: string;
}

const SearchResultTitle = ({
  totalCount,
  initialSortOption = '신상품',
  onSortChange,
  showSortOptions = false,
  className,
}: SearchResultTitleProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>(initialSortOption);

  const handleSortClick = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleSortOptionClick = (option: SortOption) => {
    setSelectedSort(option);
    setIsFilterOpen(false);
    
    if (onSortChange) {
      onSortChange(option);
    }
  };
  
  // 정렬 옵션 드롭다운 렌더링
  const renderSortOptions = () => {
    if (!showSortOptions) return null;
    
    return (
      <div css={S.sortOptionsContainerStyle}>
        <button 
          css={S.sortContainerStyle} 
          onClick={handleSortClick}
          aria-expanded={isFilterOpen}
          aria-label={`${selectedSort} 정렬 옵션 선택하기`}
          type="button"
        >
          <span css={S.sortTextStyle}>{selectedSort}</span>
          <div css={S.iconContainerStyle}>
            <SmallArrowDownIcon css={S.iconStyle} />
          </div>
        </button>

        {isFilterOpen && (
          <div css={S.dropdownStyle}>
            {SORT_OPTIONS.map((option) => (
              <button
                key={option}
                css={S.optionButtonStyle(option === selectedSort)}
                onClick={() => handleSortOptionClick(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div css={S.containerStyle} className={className}>
      <span css={S.countTextStyle}>총 {totalCount}개</span>
      {renderSortOptions()}
    </div>
  );
};

export default SearchResultTitle;