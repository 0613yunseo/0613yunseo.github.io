/* ===== 데이터: 여기만 수정하면 내용이 바뀝니다 ===== */
const PROJECTS = [
  {
    id: 'haengdong', cat: 'app', tag: 'CAPSTONE · 2026.03 ~ 2026.11',
    title: '동행가드', badge: '9개월 · 캡스톤',
    summary: '전동 휠체어 이용자의 이동 안전을 돕는 서비스. Android 앱과 관리자 웹을 개발했습니다.',
    stack: ['Kotlin', 'Jetpack Compose', 'React', 'TypeScript', 'Spring Boot', 'MySQL'],
    role: ['Kotlin·Jetpack Compose로 주행 화면, 위험 단계 알림, 주행 기록 조회 구현', 'React·TypeScript로 관리자 웹의 대시보드와 위험 이벤트 조회 화면 개발', 'Spring Boot REST API로 주행 기록·센서 데이터를 조회하고 서비스 로직과 응답 코드 일부 수정', 'MySQL 저장 결과를 확인하고 위험 단계·거리 정보가 앱 화면에 정상 표시되는지 테스트'],
    problem: '센서의 위험 이벤트를 모두 조회하자 같은 위험 단계가 반복되어 기록이 길어졌습니다.',
    solve: '위험 단계가 바뀌는 시점을 중심으로 보여주는 방식을 제안하고, 백엔드 팀원과 이벤트 요약 방식·API 응답 구조를 함께 검토했습니다. 일부 로직은 보완 중입니다.'
  },
  {
    id: 'binteum', cat: 'backend', tag: 'STARTUP CLUB · 2025',
    title: '빈틈', badge: 'Spring Boot · JUnit',
    summary: '카페 혼잡도와 공간 정보를 바탕으로 방문 목적에 맞는 카페를 찾는 서비스입니다.',
    stack: ['Spring Boot', 'Java', 'JUnit'],
    role: ['팀원들과 기능을 나누어 PoC 진행, 혼잡도 제보 등록 기능 담당', '사용자 ID·카페 ID·혼잡도 값의 필수 입력 검증 구현', '같은 사용자가 같은 카페에 60분 이내 다시 제보하면 등록되지 않는 중복 방지 로직 설계', 'ChatGPT·Codex로 작성한 코드를 직접 검토·수정하고 JUnit으로 정상 등록과 중복 제보 확인'],
    problem: 'AI 도구로 코드를 작성해도 처리 조건과 예외 상황이 정리되어 있지 않으면 검증하기 어렵습니다.',
    solve: '조건과 예외 상황을 먼저 정리한 뒤 구현하고, 테스트로 실제 동작을 직접 확인하는 순서로 작업했습니다.'
  },
  {
    id: 'water', cat: 'backend', tag: 'INTERNSHIP · 2026.01',
    title: '상수도 관리 웹 시스템', badge: '일본 현장실습 · 6인 팀',
    summary: '시온정보시스템 현장실습에서 Java/JSP와 PostgreSQL 기반 상수도 관리 시스템을 개발했습니다.',
    stack: ['Java', 'JSP', 'PostgreSQL', 'SQL', 'Git'],
    role: ['고객 정보·요금 청구·입금 내역을 관리하는 ERD와 SQL 테이블 설계', '기본키·외래키 제약조건을 설정하고 고객번호 기준으로 테이블 연결', '관리자 로그인·로그아웃, 고객 목록 조회, 관할 구역 관리 구현', 'Git이 익숙하지 않은 팀원들에게 브랜치 관리와 코드 병합 방법 공유'],
    problem: '처음에는 테이블과 속성을 많이 만들어 관계가 복잡해졌습니다.',
    solve: '담당자 피드백을 받아 불필요한 테이블과 관계를 다시 검토하고, 고객 정보를 중심으로 청구·입금 내역을 분리해 고객번호로 연결하는 구조로 수정했습니다. 팀 내 병합 충돌 대비 시간을 줄여 계획보다 일찍 작업을 마쳤습니다.'
  },
  {
    id: 'trenda', cat: 'backend', tag: 'STARTUP CLUB',
    title: 'Trenda', badge: 'Spring Boot 백엔드',
    summary: '전공자의 프로젝트와 성장을 관리하는 플랫폼입니다.',
    stack: ['Spring Boot', 'Java', 'Database'],
    role: ['Spring Boot 기반 백엔드 구현 참여', '데이터베이스 구조 검토 참여'],
    problem: '', solve: ''
  },
  {
    id: 'meme', cat: 'app', tag: 'STARTUP CLUB',
    title: '밈 아카이브', badge: '개발 파트 총괄',
    summary: '밈을 모아 볼 수 있는 웹 서비스. 개발 파트 총괄로 디자인팀과 개발팀의 작업 방향을 조율했습니다.',
    stack: ['React', 'GitHub', 'Figma'],
    role: ['React로 담당 화면 구현', '개발 파트 총괄로서 디자인팀·개발팀 작업 방향 조율', 'GitHub 브랜치 관리와 코드 병합 진행'],
    problem: '', solve: ''
  },
  {
    id: 'eardream', cat: 'plan', tag: 'CONTEST · 2025',
    title: 'earDream', badge: '🏆 최우수상',
    summary: '시니어의 디지털 기기 사용을 돕는 학습 앱. 지역혁신 인재양성 연합 페스티벌 공모전에서 최우수상을 받았습니다.',
    stack: ['IA 설계', '프로토타입', 'Figma'],
    role: ['사용자 페르소나와 주요 기능 흐름 정리', 'IA 설계와 앱 프로토타입 제작 참여', '서로 다른 전공 팀원들과 요구사항을 조율해 기능과 화면 구조 구체화'],
    problem: '', solve: ''
  }
];

const TIMELINE = [
  { d: '2026.05', t: 'Microsoft AI-900', r: '자격증', p: 'Azure AI Fundamentals 취득' },
  { d: '2026.03 ~ 2026.11', t: '캡스톤디자인 · 동행가드', r: 'Android · 관리자 웹 개발', p: 'Kotlin, React, TypeScript와 Spring Boot REST API 연동.' },
  { d: '2026.01', t: '시온정보시스템 (일본 현장실습)', r: '인턴 · 6인 팀', p: 'Java/JSP, PostgreSQL 기반 상수도 관리 웹 시스템 개발. ERD·SQL 설계.' },
  { d: '2025.03 ~ 2026.11', t: '한양여자대학교 창업동아리', r: '팀원 → 부회장', p: '웹·앱 서비스 개발. 1년 이상 부회장으로 개발 파트 진행과 협업 조율.' },
  { d: '2025', t: '지역혁신 인재양성 연합 페스티벌 공모전', r: '최우수상', p: 'earDream 기획·프로토타입 참여.' },
  { d: '2025.03', t: '데이터분석 준전문가', r: '한국데이터산업진흥원', p: '' },
  { d: '2024.03 ~ 2027.02', t: '한양여자대학교 빅데이터전공', r: '재학중 · 3.98 / 4.5', p: '' }
];

// [아이콘, 제목, 칩 스타일(solid|soft|plain), 항목]
const SKILLS = [
  ['⚙️', '백엔드', 'solid', ['Java', 'Spring Boot', 'JSP', 'REST API', 'JUnit']],
  ['🖥️', '프론트엔드 · 앱', 'soft', ['React', 'TypeScript', 'JavaScript', 'Kotlin', 'Jetpack Compose']],
  ['🗄️', '데이터베이스', 'soft', ['MySQL', 'PostgreSQL', 'SQL']],
  ['🔧', '도구', 'soft', ['Git', 'GitHub', 'Eclipse', 'Cursor', 'Figma', 'Notion']],
  ['🤖', 'AI 도구', 'soft', ['ChatGPT', 'Codex', 'Claude', 'Gemini']],
  ['🤝', '협업', 'plain', ['브랜치 관리', '코드 병합', '팀 간 조율']]
];
const CERTS = [
  ['AI-900', '2026.05', 'Microsoft'],
  ['데이터분석 준전문가', '2025.03', '한국데이터산업진흥원']
];

/* ===== 렌더링 ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

$('#grid').innerHTML = PROJECTS.map(p => `
  <button class="p-card" data-cat="${p.cat}" data-id="${p.id}">
    <span class="p-tag">${esc(p.tag)}</span>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.summary)}</p>
    <span class="p-badge">${esc(p.badge)}</span>
    <span class="p-more">자세히 보기 →</span>
  </button>`).join('');

$('#timeline').innerHTML = '<span class="fill" id="tFill"></span>' + TIMELINE.map(i => `
  <li class="t-item">
    <span class="t-date">${esc(i.d)}</span>
    <h3>${esc(i.t)}</h3>
    <div class="t-role">${esc(i.r)}</div>
    ${i.p ? `<p>${esc(i.p)}</p>` : ''}
  </li>`).join('');

$('#skillGrid').innerHTML = SKILLS.map(([ico, n, style, list]) =>
  `<div class="s-group"><h3><i>${ico}</i>${n}</h3><div class="tags ${style}">${list.map(x => `<span>${esc(x)}</span>`).join('')}</div></div>`).join('') +
  `<div class="s-group"><h3><i>📜</i>자격증</h3><div class="certs">${CERTS.map(([t, d, o]) =>
    `<div class="cert"><span class="medal">🏅</span><b>${esc(t)}</b><small>${esc(o)} · ${esc(d)}</small></div>`).join('')}</div></div>`;

/* ===== 필터 ===== */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.classList.toggle('on', x === b));
  $$('.p-card').forEach(c => c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f));
});

/* ===== 모달 ===== */
const modal = $('#modal');
let lastFocus;
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  $('#mMeta').textContent = p.tag;
  $('#mTitle').textContent = p.title;
  $('#mSum').textContent = p.summary;
  $('#mTags').innerHTML = p.stack.map(s => `<span>${esc(s)}</span>`).join('');
  $('#mBody').innerHTML =
    `<div class="m-block"><h4>담당 역할</h4><ul>${p.role.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>` +
    (p.problem ? `<div class="m-block"><h4>문제</h4><p>${esc(p.problem)}</p></div><div class="m-block"><h4>해결</h4><p>${esc(p.solve)}</p></div>` : '') +
    `<div class="m-ph">스크린샷 · 데모 링크 준비 중</div>`;
  lastFocus = document.activeElement;
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#mClose').focus();
}
function closeModal() {
  modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
$('#grid').addEventListener('click', e => { const c = e.target.closest('.p-card'); if (c) openModal(c.dataset.id); });
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
  $('#tFill').style.height = (prog * (r.height - 12)) + 'px';
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
}), { threshold: .12 });
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
