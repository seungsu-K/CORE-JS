/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

// enumerable : 열거 가능한
// iterable : 반복 가능한
// immutable : 불변의
// mutable : 변경 가능한
// mutant : 돌연변이

// 부분 문자열 추출
let slice = message.slice(4, -1);
let subString = message.substring(2, 5);
// let subStr = message.subStr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저 쓰세요..?';
  }

  return browserName;
}

checkBrowser(); // chrome

let lastIndexOf = message.lastIndexOf('s');
let includes = message.includes('Less');
let startsWith = message.startsWith('less');
let endsWith = message.endsWith('more');

let str = '         a       b     c                d      ';

// 공백 잘라내기
let trimLeft = str.trimStart();
// trimLeft() / 사용하지 않음
let trimRight = str.trimEnd();
// trimRight() / 사용하지 않음
let trim = str.trim();

let replaceAll = str.replaceAll(' ', '');
let replace = str.replace(/\s*/g, '');

const trimText = (text) => text.replaceAll(' ', '');

trimText(str); // abcd

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
