import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import * as S from './Review.style';
import RenderStars from './RenderStars';
import Keywords from './Keywords';
import PhotoScrollList from './PhotoScrollList';
import Divider from '@components/common/divider/Divider';
import theme from '@styles/theme';
import { SmallArrowDownIcon } from '@assets/svgs';
import Comment from './Comment';
import NavigationButton from '@components/buttons/navigationButton/NavigationButton';

const Review = () => {
  const averageRating = 4.8;

  // ✅ 테스트용 샘플 이미지 8개
  const photos = Array.from(
    { length: 8 },
    (_, i) =>
      `https://cdn.daisomall.co.kr/file/PD/20231208/mlR3AhMQIUI2AnD9HcML1014695_00_06mlR3AhMQIUI2AnD9HcML.jpg/dims/resize/280/quality/90/format/avif/optimize${i + 1}`,
  );

  return (
    <div css={S.Wrapper}>
      <div css={S.UpperContainer}>
        <SectionTitle
          title1="리뷰"
          title2="11747"
          title2Color="#D70011"
          onClickAll={() => console.log('전체보기 클릭')}
        />

        <div css={S.RatingContainer}>
          <p css={S.averageRating}>{averageRating}</p>
          <RenderStars score={averageRating} />
        </div>

        <div css={S.KeywordContainer}>
          <Keywords label="보습력" description="촉촉해요" percent={66} />
          <Keywords label="자극도" description="보통이에요" percent={40} />
          <Keywords label="흡수력" description="마음에 들어요" percent={84} />
        </div>
      </div>

      <div>
        <Divider />
        <div css={S.MiddleContainer}>
          <SectionTitle
            title1="사진&동영상"
            onClickAll={() => console.log('전체보기 클릭')}
          />
        </div>
        <PhotoScrollList images={photos} />
      </div>

      <Divider height="8px" color={theme.colors['gray-06']} />

      <div css={S.LowerContainer}>
        <div css={S.FilteringContainer}>
          <div css={S.ButtonContainer}>
            <button css={S.AllBtn}>전체</button>
            <button css={S.RepurchaseBtn}>재구매</button>
          </div>
          <div css={S.DropdownContainer}>
            <p css={S.Recommendation}>추천순</p>
            <SmallArrowDownIcon css={S.ArrowIcon} />
          </div>
        </div>

        <Comment
          nickname="lhe******"
          profileImageUrl="https://example.com/profile.jpg"
          rating={5}
          firstKeyword="촉촉해요"
          secondKeyword="순해요"
          thirdKeyword="마음에 들어요"
          content="매일 100을 쓰고 한 번씩 300, 500 번갈아가면서 씁니다~ 흡수 도와주는 홈케어 기기보다 100쓰는게 더 나아요!ㅎ 시간도 더 짧고 효과도 더 좋은 듯해서 손이 너무 잘갑니다~^^"
          likes={1}
        />
        <Divider />
        <Comment
          nickname="ros******"
          profileImageUrl="https://example.com/profile.jpg"
          rating={4}
          firstKeyword="촉촉해요"
          secondKeyword="자극이 있어요"
          thirdKeyword="마음에 들어요"
          content="엄총 유명한 리들샷 여러분 100도 엄청 자극있더라고요! 초보자 + 예민한 사람들은 50부터 추천해요 아직까지 효과는 모르겠어요 꾸준히 써야지 ㅎ"
          likes={4}
        />
        <Divider />
        <Comment
          nickname="kjh******"
          profileImageUrl="https://example.com/profile.jpg"
          rating={5}
          firstKeyword="보통이에요"
          secondKeyword="보통이에요"
          thirdKeyword="마음에 들어요"
          content="잘 받았습니다. 감사합니다."
          likes={0}
        />
        <NavigationButton
          text="고객리뷰 전체보기"
          count={11747}
          to="/product-detail-bottom"
        />
      </div>
    </div>
  );
};

export default Review;
