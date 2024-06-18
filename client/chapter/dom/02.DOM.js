/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes => 유사 배열 반환
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소(element) 노드에서만 사용 가능 */
// - parentElement
// - children => 유사 배열 반환
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

function getNode(node, context = document) {
  // if (isString(context)) {
  //   context = document.querySelector(context);
  // }

  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
}

getNode('.list', '#visual-section'); // ul
getNodes('.list > li');

// 1. id가 visual-section인 section 태그 요소
const section = document.querySelector('#visual-section');
document.getElementById('visual-section');

// 2. class가 list인 ul 태그 요소
const list = document.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
document.querySelector('.list > li:nth-child(2)');
const about = list.querySelector('li:nth-child(2)');

const aboutLi = [...list.children].find((li) => li.textContent === 'about');

// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;
form.querySelectorAll('*');

// 6. form 요소 안에 있는 input 태그 요소
const input = form.lastElementChild;

/* 문서 대상 확인 */
// - matches
// - contains
// - closest
