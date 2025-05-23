import * as S from './PhotoScrollList.style';

interface PhotoScrollListProps {
  images: string[]; // API에서 받아올 이미지 URL 배열
}

const PhotoScrollList = ({ images }: PhotoScrollListProps) => (
    <div css={S.ScrollContainer}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`photo-${idx}`} css={S.Thumbnail} />
      ))}
    </div>
  );

export default PhotoScrollList;
