import { BackIcon, CartIcon, Logo, SearchIcon, TohomeIcon } from '@assets/svgs';
import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
  showBackButton?: boolean;
  showTitle?: boolean;
  showSearchIcon?: boolean;
  showHomeIcon?: boolean;
  showCartIcon?: boolean;
  onBackClick?: () => void;
}

const Header = ({
  title,
  showLogo = false,
  showBackButton = false,
  showTitle = false,
  showSearchIcon = false,
  showHomeIcon = false,
  showCartIcon = false,
  onBackClick,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <div css={S.Wrapper}>
        <div css={S.LeftContainer}>
          {showLogo && <Logo width={73} />}
          {showBackButton && (
            <BackIcon
              width={24}
              onClick={handleBackClick}
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
    </>
  );
};

export default Header;
