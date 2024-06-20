/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// html에 함수 실행문을 바인딩

function handler() {
  console.log('클릭 이벤트!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
// 함수 본문을 할당

const first = getNode('.first');
first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(event) {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX);
}

first.addEventListener('click', handleClick);
// 클릭을 했을 때 이벤트 생성

const second = getNode('.second');

second.addEventListener('click', () => {
  first.removeEventListener('click', handleClick);
});
// second를 클릭하면 first의 이벤트를 삭제

function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const firstEventRemove = bindEvent('.first', 'click', handleClick);

second.addEventListener('click', firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall(e) {
  const { offsetX: xPos, offsetY: yPos } = e;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
  console.log(xPos, yPos);
}

ground.addEventListener('click', handleClickBall);

function handleMove(e) {
  const { offsetX: xPos, offsetY: yPos } = e;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  let template = /* html */ `
  <div class='emotion' style='top:${yPos - h / 2}px; left:${xPos - w / 2}px;'>😂</div>
  `;

  insertLast(ground, template);

  // ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
  console.log(xPos, yPos);
}

// ground.addEventListener('mousemove', handleMove);

// throttle (수도꼭지), debounce(공 튀김 방지)

function debounce(callback, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}
// 앞에 있는 타이머가 실행되기 전에 지워버리고 마지막 타이머만 실행됨

ground.addEventListener('mousemove', debounce(handleMove, 1000));

function throttle(callback, limit = 500) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
// true일 때는 실행이 되지 않고, 타이머가 끝난 후 false로 바뀌면 다시 실행됨

ground.addEventListener('mousemove', throttle(handleMove, 1000));

//
// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a, b, c')
// addClass('.ground',{a:'one',b:'two'})
