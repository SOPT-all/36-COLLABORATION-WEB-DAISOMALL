import { BackIcon, CartIcon, Logo, SearchIcon, TohomeIcon } from '@assets/svgs';
import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  showHeader?: boolean;
  title?: string;
  showLogo?: boolean;
  showBackButton?: boolean;
  showTitle?: boolean;
  showSearchIcon?: boolean;
  showHomeIcon?: boolean;
  showCartIcon?: boolean;
}

const Header = ({
  showHeader = false,
  title,
  showLogo = false,
  showBackButton = false,
  showTitle = false,
  showSearchIcon = false,
  showHomeIcon = false,
  showCartIcon = false,
}: HeaderProps) => {
  const navigate = useNavigate();
  const wrapperStyle = showHeader ? S.AnimatedWrapper(true) : S.Wrapper;

  return (
    <div css={wrapperStyle}>
      <div css={S.LeftContainer}>
        {showLogo && <Logo width={73} />}
        {showBackButton && (
          <BackIcon
            width={24}
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
        )}
        {showTitle && <p css={S.Title}>{title}</p>}
      </div>
      <div css={S.RightContainer}>
        {showSearchIcon && <SearchIcon css={S.NavIcons} />}
        {showHomeIcon && <TohomeIcon css={S.NavIcons} />}
        {showCartIcon && <CartIcon css={S.NavIcons} />}
      </div>
    </div>
  );
};

export default Header;
