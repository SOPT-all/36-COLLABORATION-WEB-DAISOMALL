import { useState } from 'react';
import Pagination from '@components/common/pagination/Pagination';

const SLIDE_CONTENTS = [
  { id: 1, content: '1번 페이지 내용입니다.' },
  { id: 2, content: '2번 페이지 내용입니다.' },
  { id: 3, content: '3번 페이지 내용입니다.' },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '24px 16px 20px 16px',
          border: '1px solid #eee',
          padding: '16px',
        }}
      >
        <Pagination
          contents={SLIDE_CONTENTS}
          currentPage={1}
          onPageChange={() => {}}
          isHome
        />
        <span style={{ marginTop: 16, fontWeight: 600 }}>홈 예시</span>
        <span style={{ marginTop: 8, color: '#888' }}>
          항상 1번만 진하게, 클릭/스와이프 불가
        </span>
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '24px 16px 16px 16px',
          border: '1px solid #eee',
          padding: '16px',
          userSelect: 'none',
        }}
      >
        <Pagination
          contents={SLIDE_CONTENTS}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isActive
          enableSwipe
        />
        <span style={{ marginTop: 16, fontWeight: 600 }}>
          매장 상품 찾기 예시
        </span>
        <span style={{ marginTop: 8, color: '#888' }}>
          기능 활성, 스와이프/드래그 테스트
          <br />
          <b>현재 페이지: {currentPage}</b>
        </span>
      </section>
    </>
  );
};

export default App;