/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f) {
  // arguments는 유사 배열로 전달 됨
  console.log(arguments);

  let total = 0;

  // for
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);

    total += arguments[i];
  }

  // for...of
  for (let value of arguments) {
    console.log(value);

    total += value;
  }

  console.log(total);

  // array로 변환 후 forEach
  const arr = [...arguments];
  const arr1 = Array.from(arguments);
  const arr2 = Array.prototype.slice.call(arguments);

  arr.forEach(function (price) {
    total += price;
  });
  // arr.forEach(price => total += price)

  const result = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 태생을 배열로 바꾸기
  // arguments.__proto__ = Array.prototype;

  console.log('reduce : ' + result);

  console.log(total);

  return a + b + c + d + e + f;
};

// let calculateTotal = (arr) => arr.reduce((acc,cur) => acc + cur,0)

const result = calculateTotal(1000, 5000, 2500, 500);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

callbackFunctionExpression(
  false,
  function () {
    console.log('성공입니다');
  },
  function () {
    console.log('실패입니다');
  }
);

function movePage(url, success, fail) {
  if (url === 'www.naver.com') {
    success(url); // argument
  } else {
    fail();
  }
}

movePage(
  'www.naver.com',
  function (url) {
    // parameter
    console.log(
      `현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다`
    );
    // location.href = 'https://www.naver.com'
  },
  function () {
    console.log('잘못된 url을 입력했습니다.');
  }
);

// higher-order function 고차함수
// 함수를 인수로 받아서 처리
// 함수를 리턴함

function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));

    return result;
  }
}

map([1, 2, 3], (item) => item * 2);

function greater(n) {
  return function (m) {
    return n > m;
  };
}

const g = (n) => (m) => n > m;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 함수가 선언됨과 동시에 실행되는 것을 말합니다.
// var는 블록 스코프 : x
// var는 함수 스포프 : o
// encapsulation (캡슐화)

const MASTER = (function () {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

let IIFE;

(function () {})();

//
//
const people = [
  {
    nickName: 'tiger',
    age: 40,
  },
  {
    nickName: 'beom',
    age: 45,
  },
  {
    nickName: 'seon',
    age: 20,
  },
];

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`;
}, '');

// document.body.insertAdjacentHTML('beforeend',template)

const arr3 = ['안녕', '하세요', '여러분'];

const mapValue = arr3.map(function (item) {
  return `멋쟁이 ${item}`;
});

console.log(mapValue);
