/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); // false

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB : ', AandB); // ''

// 논리곱 할당 연산자 Logical AND Assignment
function AandBAssign() {
  a = a && b;
  a &&= b;
  console.log(a);
}

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB : ', AorB); // 10

// 논리합 할당 연산자 Logical OR assignment
function AorBAssign() {
  a = a || b;
  a ||= b;
  console.log(a);
}

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue); // true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log(whichFalsy); // {thisIsFalsy: false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruth: true };
console.log(whichTruthy); // 2

let userName = prompt('ID');
if (userName?.toLowerCase() === 'admin') {
  let password = prompt('PASSWORD');

  if (password?.toLowerCase() === 'themaster') {
    console.log('환영합니다!');
  } else if (password === null || password?.replace(/\s*/g, '') === '') {
    console.log('비밀번호 입력이 취소되었습니다');
  } else {
    console.log('비밀번호 인증에 실패하였습니다');
  }
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
  console.log('아이디 입력이 취소되었습니다');
} else {
  console.log('아이디 인증에 실패하였습니다');
}

userName.replace();
