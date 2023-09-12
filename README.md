## 프로젝트명
벨로마켓

"Bello Market"은 React.js 및 Firebase를 사용하여 개발된 캔들 상품을 판매하는 온라인 쇼핑몰 웹 애플리케이션입니다. 
사용자 들은 다양한 제품들 중에서 자신이 원하는 캔들 상품을 장바구니에 담아 구매할 수 있습니다. 
또한, 관리자 계정으로 로그인하면 새로운 제품 등록도 가능합니다.



## 실행 화면


## 사용 방법
- 화면 좌측 위 'Bello Market' 로고 클릭 시 메인 화면으로 돌아온다.
- 'Products' 메뉴 클릭 시 전체 제품 목록을 볼 수 있다.
- 각 제품 클릭 시 해당 제품의 상세 정보를 확인하고 장바구니에 담을 수 있다.
- 로그인한 사용자는 우측 상단의 장바구니 아이콘 클릭 시 장바구니 페이지로 이동하여 주문할 수 있다.

## 개발 환경
프론트엔드: React.js, Tailwind CSS<br>
백엔드: Firebase (Authentication, Realtime Database, Storage)<br>
라이브러리: react-router-dom (SPA 라우팅), react-query (서버 데이터 관리), @tanstack/react-query


- Firebase와의 연동은 초기 설정부터 비동기 처리까지 많은 어려움을 겪었습니다. 하지만 이 과정에서 비동기 프로그래밍에 대한 이해도가 높아졌으며, Firebase API에 대한 깊은 이해를 얻을 수 있었습니다.
- React Query와 같은 외부 라이브러리를 사용하여 서버 데이터 관리하는 과정에서 캐싱, 데이터 동기화 등 다양한 문제들을 해결하는 방법을 배울 수 있었습니다.
- ProtectedRoute 컴포넌트 구현 시 로그인 여부나 권한 체크 등 인증/인가 부분에 대해 공부할 기회가 되었습니다.
- 이미지 업로드 기능 구현시 FileReader API와 Blob URL 생성 등 웹 API에 대해 자세히 알게 되어 좋았습니다.
- 전체적으로 커스텀 Hook과 Context API를 활용하여 상태 관리 패턴에 대한 이해도가 높아진 것 같습니다.
- Tailwind CSS를 처음 사용해보았는데, 유틸리티 클래스를 활용한 스타일링 방법이 매우 효율적이고 빠르다는 것을 알게 되었습니다.
