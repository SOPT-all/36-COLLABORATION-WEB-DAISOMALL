import {
  CategoryIconNew,
  HomeIcon,
  HomeIconActive,
  MypageIcon,
  OfflineSearchActive,
  OfflineSearchLarge,
  RecentIcon,
} from '@assets/svgs';
import * as S from './BottomNav.style';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로에 따라 탭 결정
  const getSelectedTab = () => {
    if (location.pathname === '/store-list') return 'offline';
    if (location.pathname === '/') return 'home';
    // 필요시 다른 경로도 추가
    return '';
  };

  const selectedTab = getSelectedTab();

  return (
    <nav css={S.Wrapper}>
      <div css={S.Container}>
        <CategoryIconNew css={S.BasicIcon} />
        <p css={S.Caption}>카테고리</p>
      </div>

      <div css={S.Container} onClick={() => navigate('/')}>
        {selectedTab === 'home' ? (
          <HomeIconActive css={S.HomeIcon} />
        ) : (
          <HomeIcon css={S.HomeIcon} />
        )}
        <p css={S.Caption}>홈</p>
      </div>

      <div css={S.CenterContainer} onClick={() => navigate('/store-list')}>
        {selectedTab !== 'offline' ? (
          <div css={S.CircleButton}>
            <OfflineSearchLarge css={S.OfflineSearchIcon} />
          </div>
        ) : (
          <OfflineSearchActive css={S.OfflineSearchIconActive} />
        )}
        <p css={S.CenterCaption(selectedTab === 'offline')}>매장 상품 찾기</p>
      </div>

      <div css={S.Container}>
        <RecentIcon css={S.BasicIcon} />
        <p css={S.Caption}>최근 본 상품</p>
      </div>

      <div css={S.Container}>
        <MypageIcon css={S.BasicIcon} />
        <p css={S.Caption}>마이페이지</p>
      </div>
    </nav>
  );
};

export default BottomNav;
