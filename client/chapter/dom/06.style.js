/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const first = getNode('.first');

console.log(first.className);

first.classList.add('bye');
console.log(first.classList);

first.classList.remove('hello');
// first.classList.toggle('hello');

console.log(first.classList.contains('hello'));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'dodgerblue';

first.style.cssText = `
color:white;
padding:1rem;
border:1px solid red;
`;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first)['font-size']);

function addClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (isArray(className)) {
    className.forEach((c) => node.classList.add(c));
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
}

//

function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new ReferenceError(
      'setStyle 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getStyle(node, prop) : setStyle(node, prop, value);
