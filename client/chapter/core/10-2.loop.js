/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i = 0;

do {
  console.log(i);
  if (i === 3) {
    console.log('3번 입니다.');
  }
  i++;
} while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let j = +prompt('순환 횟수를 입력해주세요');

// do {
//   console.log(j);
//   j--;
//   if (j < 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
// } while (j);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count++);
// } while (j--);

// let first = document.querySelector('.first');
// console.log(first); // <script>에 defer 속성을 안주면 null

// // first의 다음 요소 선택 => .second

// let second = first.nextSibling; // #text 공백도 sibling에 포함
// second = first.nextElementSibling; // 다음 태그 선택

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

function nextNode(node) {
  node = document.querySelector(node);
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}

const next = nextNode('.first');
console.log(next);

function prevNode(node) {
  node = document.querySelector(node);
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

const prev = prevNode('.second');
console.log(prev);
