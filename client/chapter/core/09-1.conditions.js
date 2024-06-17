/* ---------------- */
/* Condition        */
/* ---------------- */

let answer = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');
answer == 'ECMAScript'
  ? alert('정답입니다!')
  : alert('모르셨나요? 정답은 ECMAScript입니다!');

// if (answer === 'ECMAScript') {
//   console.log('정답입니다!');
// } else {
//   console.log('모르셨나요? 정답은 ECMScript 입니다!');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  // 영화 볼거니?
  let goingToWatchMovie = confirm('그 영화 볼거니?');

  if (didWatchMovie) {
    console.log('yes');
  } else {
    if (goingToWatchMovie) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = confirm('그 영화 봤니?');
let goingToWatchMovie = confirm('그 영화 볼거니?');

const message = didWatchMovie
  ? console.log('yes')
  : goingToWatchMovie
    ? console.log('yes')
    : console.log('no');

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}
