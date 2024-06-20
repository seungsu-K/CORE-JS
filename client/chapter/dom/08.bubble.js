/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', function (e) {
  // console.log('target : ', e.target);
  // target은 마우스를 가장 먼저 만나는 대상

  // console.log('current Target : ', e.currentTarget);
  //현재 실행 중인 핸들러가 할당된 요소

  // console.log('this : ', this);
  // 화살표 함수일 때 바인딩 안댐

  console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  console.log('%c p', 'color:dodgerblue');
});

/* 캡처링 ----------------------------------------------------------------- */
