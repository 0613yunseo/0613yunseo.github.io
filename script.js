/* ===== 데이터: 여기만 수정하면 내용이 바뀝니다 =====
   main: true  → 상단 대표 프로젝트(큰 카드)
   cat         → 아카이브 필터 (backend | web | plan)
   img         → assets/shots/ 이미지, 없으면 flow(데이터 흐름)를 대신 보여줌
   links       → [라벨, URL] */
const PROJECTS = [
  {
    id: 'catchup', main: true, cat: 'backend',
    period: '2026.11', org: 'NEXT AI 교내 해커톤 · 개인 프로젝트', award: '장려상',
    title: 'CatchUp AI', sub: '회의 요구사항 ↔ GitHub 코드 구현 근거 검증 서비스',
    summary: '회의록·피드백에서 요구사항을 추출하고, 결정 변경 이력과 공개 GitHub 저장소의 실제 코드 근거를 연결해 구현 여부를 판정하는 AI 기반 검증 서비스입니다.',
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'GitHub REST API', 'Supabase Auth', 'PostgreSQL', 'RLS', 'Vercel', 'Playwright'],
    points: ['서버 API에서 AI 응답의 원문·코드 인용을 실제 원본과 대조', 'Supabase RLS로 사용자별 리포트 접근 제한', '자동 테스트 147개 · tsc · ESLint 통과'],
    role: [
      'Next.js 서버 API로 문서 텍스트 추출 → 요구사항 추출 → 회의 변경 비교 → GitHub 코드 조회 → 구현 판정 흐름 구성',
      '요구사항 결정 상태(CONFIRMED·PROPOSED·UNCLEAR)와 구현 판정(VERIFIED·PARTIAL·MISMATCH·UNKNOWN) 정의',
      'GitHub REST API로 공개 저장소 확인과 기본 브랜치 코드 수집',
      'Supabase Auth 이메일 로그인, 리포트 저장·조회·삭제, RLS 정책(auth.uid() = user_id) 적용',
      'OpenAI API 키는 서버 환경변수로만 관리'
    ],
    verify: [
      'AI가 제시한 문서 인용이 실제 입력 문서에 있는지 서버에서 검증',
      'AI가 생성한 코드 인용을 실제 GitHub 원본 파일과 대조하고, 확인되지 않으면 근거에서 제외하거나 신뢰도를 낮춤',
      '주석이나 import 문만으로 구현 완료로 판단하지 않도록 보수적 판정 규칙 적용',
      '최신 회의록에 다시 언급되지 않았다는 이유만으로 삭제로 단정하지 않음'
    ],
    problem: '캡스톤과 현장실습에서 회의에서 정한 기능이 이후 어떻게 바뀌었는지, 실제 코드에 반영됐는지 확인하려면 문서와 GitHub 파일을 일일이 대조해야 했습니다.',
    solve: '요구사항을 출처와 함께 구조화하고 실제 코드 근거로 점검하는 흐름을 만들었습니다. 최종 QA에서 자동 테스트 147개, TypeScript·ESLint, 프로덕션 빌드, 1440·768·390px 반응형을 확인했습니다. 계정 간 교차 접근 차단 통합 테스트는 남은 과제입니다.',
    img: 'catchup.jpg',
    links: [['서비스', 'https://catchup-ai-liart.vercel.app/'], ['GitHub', 'https://github.com/0613yunseo/catchup-ai']]
  },
  {
    id: 'sion', main: true, cat: 'backend',
    period: '2026.01', org: '시온정보시스템 · 일본 현장실습 · 6인 팀',
    title: '상수도 관리 웹 시스템', sub: 'JSP · PostgreSQL 기반 관리자 업무 시스템',
    summary: '일본 현지 기업의 요구사항을 바탕으로 고객 정보, 관할 구역, 요금 고지, 입금 및 연체 고객 관리를 지원하는 JSP 기반 상수도 관리 웹 시스템입니다.',
    stack: ['Java', 'JSP', 'PostgreSQL', 'SQL', 'HTML/CSS/JS', 'Eclipse', 'Git'],
    points: ['관리자 테이블 기반 로그인 검증과 세션 처리', '고객번호 중심 ERD · PK/FK 제약조건 설계', 'Git 브랜치 협업 정리와 충돌 해결 지원'],
    role: [
      '관리자 사번·비밀번호를 PostgreSQL 관리자 테이블과 대조하는 로그인 구현',
      '로그인 성공 시 메인 이동, 로그아웃 시 세션 종료, 비로그인 사용자의 관리자 페이지 접근 차단',
      '관할 구역 리스트 조회 화면과 구역명 검색 구조 구현, 회사 피드백에 맞춰 메뉴·화면 수정',
      '고객 정보·요금 청구·입금 내역 ERD와 SQL 테이블 설계, PostgreSQL 데이터를 JSP 화면에 연동',
      '페이지별 상세설계서 작성'
    ],
    problem: '처음에는 모든 정보를 관리하려고 테이블과 속성을 많이 만들어 관계가 복잡해졌습니다. 팀원 대부분은 GitHub 협업 경험이 적어 충돌이 잦았습니다.',
    solve: '담당자 피드백으로 불필요한 테이블을 정리하고 고객 정보를 중심으로 청구·입금 내역을 분리해 고객번호로 연결했습니다. 기능별 브랜치, 작업 전 pull, dev 브랜치 기준 머지 흐름을 정리해 계획보다 일찍 통합을 마쳤습니다.',
    flow: ['JSP 화면 (로그인 · 관할 구역)', '관리자 인증 · 세션', 'PostgreSQL (고객 · 청구 · 입금)'],
    links: [['GitHub', 'https://github.com/daaaaahye/sion']]
  },
  {
    id: 'haengdong', main: true, cat: 'backend',
    period: '2026.03 ~ 진행중', org: '캡스톤디자인',
    title: '동행가드', sub: '전동 휠체어 이동 안전 보조 서비스',
    summary: '전동 휠체어 이용자가 이동 중 마주치는 장애물·단차·충돌 위험을 센서로 감지하고, 앱과 관리자 웹에서 위험 상태와 누적 위험 구간을 확인하는 서비스입니다.',
    stack: ['Spring Boot', 'REST API', 'MySQL', 'Kotlin', 'Jetpack Compose', 'React', 'TypeScript'],
    points: ['앱·관리자 웹은 Spring Boot API만 호출하는 구조', '주행 ID 발급 후 센서 이벤트 조회 · 위험 단계 표시', 'ERD 요구사항 · API Mapping · API 명세 정리'],
    role: [
      'Spring Boot REST API로 주행 기록·센서 데이터를 조회하고 백엔드 서비스 로직과 API 응답 코드 일부 수정',
      'MySQL 저장 결과를 확인하고 위험 단계·거리 정보가 화면에 정상 표시되는지 테스트',
      'Kotlin·Jetpack Compose로 주행 화면, 위험 단계 알림, 주행 기록 조회 구현',
      'React·TypeScript로 관리자 웹 대시보드와 위험 이벤트 조회 화면 개발',
      '사용자 앱·관리자 웹 IA, 화면별 기능/데이터 정의서, API Mapping, ERD 요구사항 정리'
    ],
    problem: '센서의 위험 이벤트를 모두 조회하자 같은 위험 단계가 반복되어 기록이 길어졌습니다.',
    solve: '위험 단계가 바뀌는 시점을 중심으로 보여주는 방식을 제안하고, 백엔드 담당 팀원과 이벤트 요약 방식과 API 응답 구조를 함께 검토했습니다. 일부 로직은 보완 중입니다.',
    flow: ['Android 앱 · 관리자 웹', 'Spring Boot REST API', 'MySQL', 'FastAPI AI 서버 (경로·위험 분석)']
  },
  {
    id: 'binteum', main: true, cat: 'backend',
    period: '2026.03 ~ 진행중', org: '창업동아리 뉴클리어스 · 5인 팀',
    title: '빈틈', sub: '목적 기반 카페 혼잡도 탐색 서비스',
    summary: '방문 전에 카페의 현재·예상 혼잡도와 공부·업무·대화·휴식 적합도를 확인하는 서비스입니다. 최근 제보가 있으면 현재 혼잡도를, 부족하면 요일·시간대 패턴과 누적 제보로 예상 혼잡도를 보여주고, 최근 제보 시각과 누적 제보 수로 신뢰도를 함께 표시합니다.',
    stack: ['Java 21', 'Spring Boot 4', 'Spring Security', 'JWT', 'JPA', 'PostgreSQL · PostGIS', 'Redis', 'JUnit'],
    points: ['Spring Security + JWT 인증·권한(USER · ADMIN · 비회원) 공통 기반 구축', '401/403을 공통 오류 규격(ProblemDetail + code)으로 통일', '보안 설정 테스트 18개 · 인증 가이드 · Git 컨벤션 문서화'],
    role: [
      '백엔드 공통 기반 셋업: 프로젝트 구조, local·prod·test 프로필, 필수 환경변수 검증(RequiredEnvironmentValidator)',
      'JwtTokenProvider(토큰 생성 · 서명·만료 검증)와 JwtAuthenticationFilter(Bearer 토큰 추출 · SecurityContext 설정) 구현',
      'SecurityConfig에 공개 · 로그인 사용자 · /api/admin/** 관리자 경로 규칙, Stateless 세션, CORS 설정',
      'SecurityErrorHandler로 401·403 응답을 팀 공통 오류 규격(ProblemDetail + code)에 연동',
      'JwtTokenProviderTest(5개), SecurityConfigTest(13개) 작성',
      '인증·권한 가이드, Git 협업 컨벤션(브랜치명 규칙 포함), PR 템플릿 작성과 PR 머지 관리',
      'PoC 단계: 혼잡도 제보 등록 기능 — 필수 입력값 검증, 같은 사용자의 60분 내 중복 제보 차단'
    ],
    verify: [
      '구현 전에 처리 조건과 예외 상황을 먼저 정리',
      'ChatGPT·Codex로 작성한 코드를 직접 검토·수정',
      'JUnit 테스트로 정상 등록과 중복 제보, 토큰 검증·경로별 권한 등 예외 상황을 확인'
    ],
    problem: '기획상 비회원도 홈·카페 탐색·상세·비교를 볼 수 있어야 하지만, 기본 보안 규칙은 인증 경로 외 모든 요청에 로그인을 요구했습니다. 같은 API에서 로그인 여부에 따라 응답도 달라져야 했습니다.',
    solve: '공개 경로에서도 토큰이 있으면 필터가 인증 정보를 넣고, 비회원이면 principal을 null로 두어 하나의 API 안에서 분기할 수 있게 했습니다. 비회원 조회 경로는 API 규격 확정 후 GET만 공개하는 방식으로 가이드에 정리했습니다.',
    flow: ['요청 · Authorization: Bearer 토큰', 'JwtAuthenticationFilter (서명 · 만료 검증)', 'SecurityConfig 경로 권한 (공개 · USER · ADMIN)', 'Controller  /  실패 시 401 · 403 ProblemDetail']
  },

  /* ----- 아카이브 ----- */
  {
    id: 'pivot', cat: 'backend', period: '2026.04 ~ 2026.05', org: '팀 프로젝트 · 공모전 제출',
    title: 'Pivot Seoul', sub: '서울 공공데이터 기반 AI 의사결정 시뮬레이터',
    summary: '서울시 공공데이터로 주거·커리어·돌봄·정책 선택을 현재 지역과 비교 지역 A/B로 비교하고, 생애 조건에 맞는 의사결정을 돕는 AI 시뮬레이터입니다.',
    stack: ['Spring Boot', 'Java 17', 'PostgreSQL', 'FastAPI', 'Next.js', 'TypeScript', 'Docker'],
    role: [
      'PRD Archive, 사용자·관리자 IA, 기능·비기능 요구사항 정리',
      'Spring Boot 백엔드와 FastAPI AI 서비스의 책임 분리 구조 정리',
      'Simulation Session · Scenario · Simulation Run · Scenario Result 중심 ERD와 데이터 정의서 정리',
      'API 명세서 작성 참여',
      '결과 화면을 한 줄 진단 → 임계점 → A/B 비교 → 위험 구간 → 회복 방법 → 이번 주 할 일 → 데이터 근거 순서로 구성'
    ],
    img: 'pivotseoul.jpg',
    links: [['프로토타입', 'https://apron-nova-83477765.figma.site/'], ['GitHub', 'https://github.com/bigdata-seoul/pivotSeoul']]
  },
  {
    id: 'glin', cat: 'backend', period: '2026.02', org: '개인 프로젝트',
    title: 'Glin', sub: 'Evidence 기반 PDF 요약 MCP 서버',
    summary: '로컬 PDF를 요약하고, 각 요약 문장의 원문 근거를 page·line·quote 단위로 확인할 수 있도록 설계한 서비스입니다.',
    stack: ['MCP Server', 'Supabase', 'Docker Compose', 'Embedding Retrieval', 'Reranker'],
    role: [
      '제공된 PRD를 바탕으로 IA, 문서·요약·evidence 중심 ERD 설계',
      '기술스택 정의서와 프로젝트 파일구조 작성',
      'Supabase DB 구조 정리와 데이터베이스 연동',
      '텍스트 추출 → 라인 생성 → 요약 → 근거 후보 검색 → 재랭킹 → 반환 흐름 구체화',
      '무드보드·로고·프로토타입 제작'
    ],
    links: [['GitHub', 'https://github.com/0613yunseo/Glin']]
  },
  {
    id: 'trenda', cat: 'backend', period: '2025.10 ~ 2025.12', org: '미니 프로젝트 · 스터디',
    title: 'Trenda', sub: '디자인·개발 전공자 성장 관리 플랫폼',
    summary: '전공자가 프로젝트, 포트폴리오, 트렌드 리서치, 학습 성장을 한 곳에서 관리하도록 기획한 플랫폼입니다.',
    stack: ['Spring Boot', 'PostgreSQL', 'Next.js', 'React', 'TypeScript', 'Figma'],
    role: [
      'Spring Boot 기반 백엔드 구현과 데이터베이스 구조 검토 참여',
      'Pre-IA·IA 구조 설계',
      '커뮤니티 허브와 소개 웹 랜딩 와이어프레임·프로토타입 제작'
    ],
    img: 'trenda.jpg',
    links: [['웹 배포', 'https://trenda-vj5z.vercel.app/'], ['GitHub', 'https://github.com/siren8289/trenda']]
  },
  {
    id: 'meme', cat: 'web', period: '2025.09 ~ 2025.12', org: '창업동아리 · 부회장 · 개발 총괄',
    title: 'TrendArc · 밈 아카이브', sub: '참여형 밈 아카이브 웹',
    summary: '밈과 유행어의 기원, 확산 과정, 사용 맥락을 기록하고 사용자 투표·요청·신고로 함께 만드는 웹 아카이브입니다.',
    stack: ['React', 'Vite', 'JavaScript', 'Figma', 'GitHub'],
    role: [
      '부회장으로 프로젝트 진행과 개발 파트 총괄',
      '디자인팀 프로토타입을 기반으로 구현 가능 범위와 기능 우선순위 조율',
      'React로 담당 화면 UI 구현, 밈 요청·투표·신고 흐름의 개발 방향 정리',
      'GitHub 브랜치 관리와 코드 병합 진행'
    ],
    links: [['GitHub', 'https://github.com/0613yunseo/Meme-Archive']]
  },
  {
    id: 'eco', cat: 'web', period: '2025.10 ~ 2025.11', org: '5인 팀 프로젝트',
    title: 'EcoCampus+', sub: '센서 기반 스마트 캠퍼스 ESG 플랫폼',
    summary: 'BLE Beacon·Raspberry Pi로 강의실 이용 행동을 인식하고, AI 분석 결과를 미션·보상·피드백으로 연결하는 ESG 플랫폼입니다.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Figma', 'GitHub'],
    role: [
      '학생 앱의 Home 화면과 캐릭터 성장 화면 구성',
      '서비스 흐름에 맞는 화면 구조와 보상 경험 설계',
      '컬러 시스템 지정, 컴포넌트 분리, 프로토타입 제작 참여'
    ],
    img: 'ecocampus.jpg', imgNote: '팀 관리자 대시보드 프로토타입',
    links: [['프로토타입', 'https://probe-title-31527156.figma.site/dashboard'], ['GitHub', 'https://github.com/siren8289/ecoCampus']]
  },
  {
    id: 'maumm', cat: 'web', period: '2025.08', org: '사이드 프로젝트',
    title: 'Maumm', sub: '감정 기록 기반 모바일 서비스',
    summary: '감정과 짧은 일기를 기록하고, 누적 데이터를 통계와 피드백으로 확인하는 감정 기록 앱입니다.',
    stack: ['React Native', 'Expo', 'JavaScript', 'GitHub'],
    role: [
      '담당 페이지 화면 구현과 반복 UI 컴포넌트 분리',
      '페이지별 파일 구조와 컴포넌트 역할 이해',
      'GitHub clone·branch·merge 협업 흐름 학습'
    ],
    links: [['GitHub', 'https://github.com/siren8289/Maumm_side-project']]
  },
  {
    id: 'minimo', cat: 'web', period: '2025.05 ~ 2025.07', org: '창업동아리 VALUABLE',
    title: 'Minimo', sub: '1인 가구 공동구매·렌탈 플랫폼',
    summary: '1인 가구가 생활용품을 공동구매하거나 필요한 제품을 렌탈·공유할 수 있는 플랫폼입니다.',
    stack: ['React', 'JavaScript', 'React Router DOM', 'GitHub'],
    role: [
      '프로토타입을 기반으로 목록·공동구매 상세·렌탈 상세·상품 등록 화면 구현',
      '상품 카드·버튼·상세 정보 영역을 컴포넌트로 분리',
      'Home → List → Detail 화면 이동 구조와 페이지별 데이터 구성 이해'
    ],
    links: [['GitHub', 'https://github.com/siren8289/UXVERSE']]
  },
  {
    id: 'mido', cat: 'plan', period: '2025.12 ~ 2026.01', org: '어치브모먼트 블레이버스 인사이트톤', award: '본선 진출',
    title: 'Mido', sub: '과정 중심 AI 협업 가이드라인 시스템',
    summary: 'AI 결과물의 사후 검토 부담을 줄이기 위해, 팀 기준을 작업 과정 중에 제공하는 AI 협업 가이드라인 시스템입니다.',
    stack: ['Figma', 'Notion', 'PRD', 'IA', 'User Flow'],
    role: ['문제 정의, PRD, 핵심 기능, 사용자 흐름 정리', '프로토타입 제작', '사업계획서 작성 참여'],
    img: 'mido.jpg',
    links: [['프로토타입', 'https://daisy-power-83395279.figma.site/'], ['GitHub', 'https://github.com/siren8289/MIDO']]
  },
  {
    id: 'eardream', cat: 'plan', period: '2025.09 ~ 2025.10', org: '지역혁신 인재양성 연합 페스티벌', award: '최우수상',
    title: 'earDream', sub: '시니어 맞춤형 디지털 학습 앱',
    summary: 'AI 진단, 챗봇 학습, 미션 수행, 보상 흐름으로 시니어의 디지털 기기 사용을 돕는 학습 앱 기획입니다. 개발 전공 3명, 디자인 전공 2명이 참여했습니다.',
    stack: ['Figma', 'Notion', 'IA', 'User Flow', 'Prototype'],
    role: ['사용자 페르소나와 주요 기능 흐름 정리', 'IA 설계와 앱 프로토타입 제작 참여'],
    problem: '기능이 늘어나며 구조가 복잡해졌고, 주 사용자가 시니어라 쉬운 흐름이 중요했습니다.',
    solve: '기능을 주요 메뉴별로 재분류하고 진단 → 맞춤 미션 → 수행 확인 → 보상 → 마이페이지 흐름을 IA에 반영했습니다.'
  }
];

const TIMELINE = [
  { d: '2026.11', t: 'NEXT AI 교내 해커톤', r: '장려상 · CatchUp AI', p: '회의 요구사항과 GitHub 코드 구현 근거를 연결하는 검증 서비스 개발.' },
  { d: '2026.05', t: 'Microsoft AI-900', r: '자격증', p: '' },
  { d: '2026.03 ~ 진행중', t: '캡스톤디자인 · 동행가드', r: '백엔드 연동 · 앱 · 관리자 웹', p: 'Spring Boot REST API 연동, Kotlin 앱과 React 관리자 웹 개발.' },
  { d: '2026.01', t: '시온정보시스템 (일본 현장실습)', r: '인턴 · 6인 팀', p: 'JSP·PostgreSQL 상수도 관리 웹 시스템. 로그인·관할 구역 관리, ERD 설계.' },
  { d: '2025.12 ~ 2026.01', t: '어치브모먼트 블레이버스 인사이트톤', r: '본선 진출 · Mido', p: '' },
  { d: '2025.11', t: '지역혁신 인재양성 연합 페스티벌 공모전', r: '최우수상 · earDream', p: '한국정보통신보안윤리학회' },
  { d: '2025.03 ~ 현재', t: '한양여자대학교 창업동아리', r: '팀원 → 부회장', p: 'VALUABLE(2025) · 뉴클리어스(2026). 웹·앱 서비스 개발, 개발 파트 진행과 협업 조율.' },
  { d: '2025.03', t: '데이터분석 준전문가', r: '한국데이터산업진흥원', p: '' },
  { d: '2024.03 ~ 2027.02', t: '한양여자대학교 빅데이터과', r: '재학중 · 3.98 / 4.5', p: '' }
];

/* ===== 기술: 분야별로 꼭 필요한 것만, 누르면 근거가 나온다 =====
   SKILL_GROUPS: [분야, [[보이는 이름, 근거 키], ...]]
   EVIDENCE[키]: [[프로젝트 id, 무엇을 했나, 어떻게 확인했나], ...] */
const SKILL_GROUPS = [
  ['백엔드', [['Java', 'java'], ['Spring Boot', 'boot'], ['Spring Security · JWT', 'security'], ['JUnit', 'junit'], ['REST API', 'rest'], ['JSP', 'java']]],
  ['데이터', [['PostgreSQL', 'pg'], ['MySQL', 'mysql'], ['Supabase', 'supa'], ['ERD 설계', 'erd']]],
  ['화면', [['React · TypeScript', 'react'], ['Next.js', 'next'], ['Kotlin', 'kotlin'], ['React Native', 'rn']]],
  ['협업 · AI', [['Git 협업', 'git'], ['PRD · IA', 'plan'], ['OpenAI API', 'ai'], ['AI 코드 검증', 'aiCheck']]]
];
const SKILL_ETC = '그 외 도구 · Eclipse, Vercel, Cursor, Figma, Notion, ChatGPT, Claude, Gemini';
const EVIDENCE = {
  boot: [
    ['binteum', '백엔드 공통 기반 셋업 · 프로필 · 필수 환경변수 검증', 'SecurityConfigTest 13개, JwtTokenProviderTest 5개'],
    ['haengdong', '주행 기록 · 센서 데이터 조회 API 연동, 서비스 로직과 응답 코드 수정', 'MySQL 저장 결과와 앱 화면 표시를 직접 테스트'],
    ['trenda', 'Spring Boot 기반 백엔드 구현 참여', '데이터베이스 구조 검토']
  ],
  security: [
    ['binteum', 'JwtTokenProvider(토큰 생성 · 서명·만료 검증), JwtAuthenticationFilter, 경로별 권한(공개 · USER · ADMIN)', '401·403을 ProblemDetail + code 공통 규격으로 통일, SecurityConfigTest 13개로 경로별 권한 확인']
  ],
  junit: [
    ['binteum', '보안 설정 테스트 18개, PoC 단계 혼잡도 제보 테스트', '정상 등록, 60분 내 중복 제보, 토큰 검증 실패 상황 확인']
  ],
  java: [
    ['sion', 'Java/JSP로 관리자 로그인 · 로그아웃, 세션 종료, 비로그인 접근 차단', '회사 피드백으로 관할 구역 화면 수정'],
    ['binteum', 'Java 21 · Spring Boot 공통 보안 기반', 'JUnit 테스트 18개']
  ],
  rest: [
    ['catchup', 'Next.js 서버 API: 문서 추출 → 요구사항 추출 → 변경 비교 → 코드 조회 → 판정', 'AI 인용을 서버에서 실제 원본과 대조'],
    ['haengdong', '앱 · 관리자 웹은 Spring Boot API만 호출하는 구조, API Mapping 정리', '이벤트 요약 방식과 응답 구조를 팀원과 검토'],
    ['pivot', 'API 명세서 작성 참여, Spring Boot와 FastAPI 책임 분리', '']
  ],
  pg: [
    ['sion', '고객 · 청구 · 입금 ERD, PK/FK 제약조건, JSP 연동', '담당자 피드백으로 고객번호 중심 구조로 재설계'],
    ['catchup', 'Supabase PostgreSQL에 사용자별 리포트 저장 · 조회 · 삭제', 'RLS 정책 auth.uid() = user_id로 본인 기록만 접근'],
    ['trenda', '백엔드 데이터베이스 구조 검토', '']
  ],
  mysql: [
    ['haengdong', '센서 · 주행 데이터 저장 결과 확인', '위험 단계 · 거리 정보가 화면에 정상 표시되는지 테스트']
  ],
  supa: [
    ['catchup', 'Supabase Auth 이메일 로그인, 리포트 저장 · 조회 · 삭제', 'RLS로 사용자별 접근 제한'],
    ['glin', 'Supabase DB 구조 정리와 데이터베이스 연동', '']
  ],
  erd: [
    ['sion', '상수도 관리 ERD · SQL 테이블 설계', '고객번호 중심으로 재설계'],
    ['pivot', 'Simulation Session · Scenario · Run · Result 중심 ERD v4', ''],
    ['glin', '문서 · 요약 · evidence 중심 ERD', ''],
    ['haengdong', 'ERD 요구사항 · 화면별 기능/데이터 정의서', '']
  ],
  react: [
    ['haengdong', 'React · TypeScript 관리자 웹 대시보드와 위험 이벤트 조회 화면', ''],
    ['meme', 'React · Vite로 담당 화면 UI 구현, 개발 파트 총괄', ''],
    ['minimo', 'React로 목록 · 상세 · 등록 화면 구현, 컴포넌트 분리', '']
  ],
  next: [
    ['catchup', 'Next.js · TypeScript 반응형 웹과 서버 API', '자동 테스트 147개 · tsc · ESLint 통과']
  ],
  kotlin: [
    ['haengdong', 'Kotlin · Jetpack Compose로 주행 화면, 위험 단계 알림, 주행 기록 조회', '']
  ],
  rn: [
    ['eco', 'Expo · React Native 학생 앱 Home · 캐릭터 성장 화면', ''],
    ['maumm', 'React Native 담당 페이지 구현, 반복 UI 컴포넌트 분리', '']
  ],
  git: [
    ['binteum', 'Git 컨벤션 · 브랜치명 규칙 · PR 템플릿, PR 머지 관리', ''],
    ['sion', '기능별 브랜치 · 작업 전 pull · dev 기준 머지 흐름 정리, 충돌 해결 지원', '계획보다 일찍 통합 완료'],
    ['meme', '브랜치 관리와 코드 병합', '']
  ],
  plan: [
    ['pivot', 'PRD Archive, 사용자 · 관리자 IA, 기능 · 비기능 요구사항', ''],
    ['eardream', '페르소나, 주요 기능 흐름, IA', '공모전 최우수상'],
    ['mido', '문제 정의, PRD, 사용자 흐름, 프로토타입', '인사이트톤 본선 진출']
  ],
  ai: [
    ['catchup', 'OpenAI API로 요구사항 추출 · 회의 변경 탐지 · 코드 비교', '']
  ],
  aiCheck: [
    ['catchup', 'AI가 만든 문서 · 코드 인용을 서버에서 실제 원본과 대조, 확인 안 되면 근거에서 제외', '주석이나 import만으로 구현 완료로 판단하지 않는 보수적 규칙'],
    ['binteum', 'ChatGPT · Codex로 작성한 코드를 직접 검토 · 수정', 'JUnit으로 정상 · 예외 상황 확인']
  ]
};
// 자격증: [이름, 취득, 발급처, 정식 명칭, 내용]
const CERTS = [
  ['AI-900', '2026.05', 'Microsoft', 'Microsoft Certified: Azure AI Fundamentals',
    'AI·머신러닝 기본 개념과 컴퓨터 비전, 자연어 처리, 생성형 AI 등 Azure AI 서비스의 이해를 확인하는 Microsoft 공인 자격입니다.'],
  ['데이터분석 준전문가', '2025.03', '한국데이터산업진흥원', 'ADsP (Advanced Data Analytics Semi-Professional)',
    '데이터 이해, 데이터 분석 기획, 데이터 분석(통계 기초) 영역을 다루는 국가공인 자격입니다.']
];

/* ===== 렌더링 ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SHOT = 'assets/shots/';

// 이미지가 없으면 데이터 흐름을 그림 대신 보여줌
const visual = p => p.img
  ? `<img src="${SHOT + p.img}" alt="${esc(p.title)} 화면" loading="lazy">`
  : p.flow
    ? `<ol class="flow">${p.flow.map(f => `<li>${esc(f)}</li>`).join('')}</ol>`
    : `<div class="noimg"><b>${esc(p.title)}</b><span>${esc(p.sub)}</span></div>`;

$('#featured').innerHTML = PROJECTS.filter(p => p.main).map((p, i) => `
  <button class="f-card" data-id="${p.id}">
    <div class="f-vis">${visual(p)}</div>
    <div class="f-body">
      <span class="p-tag">${esc(p.period)}${p.award ? ` · <em>${esc(p.award)}</em>` : ''}</span>
      <h3>${esc(p.title)}</h3>
      <p class="f-sub">${esc(p.sub)}</p>
      <ul class="f-points">${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="mini-tags">${p.stack.slice(0, 5).map(s => `<span>${esc(s)}</span>`).join('')}</div>
      <span class="p-more">자세히 보기 →</span>
    </div>
  </button>`).join('');

$('#grid').innerHTML = PROJECTS.filter(p => !p.main).map(p => `
  <button class="p-card" data-cat="${p.cat}" data-id="${p.id}">
    ${p.img ? `<div class="p-thumb"><img src="${SHOT + p.img}" alt="" loading="lazy"></div>` : ''}
    <span class="p-tag">${esc(p.period)}</span>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.sub)}</p>
    ${p.award ? `<span class="p-badge">${esc(p.award)}</span>` : ''}
    <div class="mini-tags">${p.stack.slice(0, 3).map(s => `<span>${esc(s)}</span>`).join('')}</div>
  </button>`).join('');

$('#timeline').innerHTML = '<span class="fill" id="tFill"></span>' + TIMELINE.map(i => `
  <li class="t-item">
    <span class="t-date">${esc(i.d)}</span>
    <h3>${esc(i.t)}</h3>
    <div class="t-role">${esc(i.r)}</div>
    ${i.p ? `<p>${esc(i.p)}</p>` : ''}
  </li>`).join('');

$('#skillGrid').innerHTML = SKILL_GROUPS.map(([g, items]) =>
  `<div class="sk-row"><h3>${g}</h3><div class="sk-items">${items.map(([n, k]) =>
    `<button type="button" data-key="${k}" data-name="${esc(n)}" aria-pressed="false">${esc(n)}</button>`).join('')}</div></div>`).join('');
$('#skillEtc').textContent = SKILL_ETC;
$('#certList').innerHTML = CERTS.map(([t, d, o], i) =>
  `<button type="button" class="sk-cert" data-cert="${i}" aria-pressed="false"><b>${esc(t)}</b><small>${esc(o)} · ${esc(d)}</small></button>`).join('');

const evTitle = $('#evTitle'), evBody = $('#evBody');
const pressOnly = el => $$('#skills [aria-pressed]').forEach(b => b.setAttribute('aria-pressed', b === el));
function showSkill(btn) {
  pressOnly(btn);
  evTitle.textContent = `${btn.dataset.name}로 한 일`;
  evBody.innerHTML = `<ol class="evidence">${EVIDENCE[btn.dataset.key].map(([id, what, how], i) => {
    const p = PROJECTS.find(x => x.id === id);
    return `<li style="animation-delay:${i * 70}ms"><b>${esc(p.title)}</b><span>${esc(what)}</span>${how ? `<span class="how">확인 · ${esc(how)}</span>` : ''}<button type="button" class="ev-open" data-id="${id}">프로젝트 자세히 →</button></li>`;
  }).join('')}</ol>`;
}
function showCert(btn) {
  const [t, d, o, full, desc] = CERTS[+btn.dataset.cert];
  pressOnly(btn);
  evTitle.textContent = t;
  evBody.innerHTML = `<div class="cert-detail"><dl>
    <div><dt>정식 명칭</dt><dd>${esc(full)}</dd></div>
    <div><dt>발급</dt><dd>${esc(o)}</dd></div>
    <div><dt>취득</dt><dd>${esc(d)}</dd></div></dl><p>${esc(desc)}</p></div>`;
}
$('#skills').addEventListener('click', e => {
  const s = e.target.closest('[data-key]'), c = e.target.closest('[data-cert]'), o = e.target.closest('.ev-open');
  if (o) return openModal(o.dataset.id);
  if (s) showSkill(s); else if (c) showCert(c); else return;
  if (matchMedia('(max-width:900px)').matches) $('.sk-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
showSkill($('#skillGrid [data-key="boot"]'));

/* ===== 필터 ===== */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.classList.toggle('on', x === b));
  $$('.p-card').forEach(c => c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f));
});

/* ===== 모달 ===== */
const modal = $('#modal');
let lastFocus;
const block = (h, items) => items && items.length ? `<div class="m-block"><h4>${h}</h4><ul>${items.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>` : '';
let curIdx = -1;
function openModal(id) {
  const wasOpen = modal.classList.contains('open');
  curIdx = PROJECTS.findIndex(x => x.id === id);
  const p = PROJECTS[curIdx], n = PROJECTS.length;
  const prev = PROJECTS[(curIdx - 1 + n) % n], next = PROJECTS[(curIdx + 1) % n];
  $('#mCount').textContent = `${curIdx + 1} / ${n}`;
  $('#mPrevT').textContent = prev.title; $('#mPrev').setAttribute('aria-label', `이전 프로젝트: ${prev.title}`);
  $('#mNextT').textContent = next.title; $('#mNext').setAttribute('aria-label', `다음 프로젝트: ${next.title}`);
  $('#mMeta').textContent = [p.period, p.org, p.award].filter(Boolean).join(' · ');
  $('#mTitle').textContent = p.title;
  $('#mSum').textContent = p.summary;
  $('#mTags').innerHTML = p.stack.map(s => `<span>${esc(s)}</span>`).join('');
  $('#mBody').innerHTML =
    (p.img ? `<figure class="m-img"><img src="${SHOT + p.img}" alt="${esc(p.title)} 화면">${p.imgNote ? `<figcaption>${esc(p.imgNote)}</figcaption>` : ''}</figure>`
      : p.flow ? `<div class="m-flow"><h4>데이터 흐름</h4>${visual(p)}</div>` : '') +
    block('담당 역할', p.role) +
    block('AI 결과 검증 방식', p.verify) +
    (p.problem ? `<div class="m-block"><h4>문제</h4><p>${esc(p.problem)}</p></div><div class="m-block"><h4>해결 · 결과</h4><p>${esc(p.solve)}</p></div>` : '') +
    (p.links ? `<div class="m-links">${p.links.map(([l, u]) => `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${esc(l)} ↗</a>`).join('')}</div>` : '');
  const sheet = $('.sheet');
  sheet.scrollTop = 0;
  if (wasOpen) { sheet.classList.remove('swap'); void sheet.offsetWidth; sheet.classList.add('swap'); return; }
  lastFocus = document.activeElement;
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#mClose').focus();
}
const step = d => openModal(PROJECTS[(curIdx + d + PROJECTS.length) % PROJECTS.length].id);
$('#mPrev').addEventListener('click', () => step(-1));
$('#mNext').addEventListener('click', () => step(1));
addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});
// 휴대폰: 좌우로 밀어서 넘기기
let tx = null, ty = null;
modal.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
modal.addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  tx = null;
}, { passive: true });
function closeModal() {
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
$('#projects').addEventListener('click', e => { const c = e.target.closest('[data-id]'); if (c) openModal(c.dataset.id); });
$('#mClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== 스크롤: 진행바, 네비 강조, 등장 효과 ===== */
const nav = $('#nav'), bar = $('#progress');
function onScroll() {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  nav.classList.toggle('scrolled', h.scrollTop > 10);
  // 타임라인 선 채우기
  const tl = $('#timeline'), r = tl.getBoundingClientRect();
  const prog = Math.min(Math.max((innerHeight * .65 - r.top) / r.height, 0), 1);
  $('#tFill').style.height = (prog * (r.height - 60)) + 'px';
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// 메뉴 강조: 화면 상단 40% 지점을 지난 마지막 섹션 (히어로에서는 없음)
const links = $$('[data-link]'), secs = ['about', 'projects', 'career', 'skills', 'contact'].map(id => $('#' + id));
function spy() {
  const line = innerHeight * .4;
  let cur = '';
  secs.forEach(s => { if (s.getBoundingClientRect().top <= line) cur = s.id; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = 'contact';
  links.forEach(a => a.classList.toggle('active', a.dataset.link === cur));
}
addEventListener('scroll', spy, { passive: true }); spy();

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
  $$('[data-count]', e.target).forEach(countUp);
}), { threshold: .08 });
$$('.reveal').forEach(el => io.observe(el));

const tio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { rootMargin: '0px 0px -35% 0px' });
$$('.t-item').forEach(el => tio.observe(el));

function countUp(el) {
  const end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
  const t0 = performance.now();
  (function tick(t) {
    const k = Math.min((t - t0) / 1200, 1), v = end * (1 - Math.pow(1 - k, 3));
    el.textContent = v.toFixed(dec) + suf;
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ===== 히어로 사진 틸트 ===== */
const photo = $('.hero-photo img');
if (matchMedia('(hover:hover)').matches) {
  $('#hero').addEventListener('mousemove', e => {
    const x = (e.clientX / innerWidth - .5) * 8, y = (e.clientY / innerHeight - .5) * -8;
    photo.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`;
  });
  $('#hero').addEventListener('mouseleave', () => photo.style.transform = '');
}
