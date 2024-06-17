/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let total = 0;

  // for
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }

  // for...of
  total = 0;
  for (let value of rest) {
    total += value;
  }

  // forEach => arrow function
  total = 0;
  rest.forEach((item) => {
    total += item;
  });

  // reduce => arrow function
  total = rest.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return total;
};

const calc = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);
console.log(calc(100, 1000, 1000));

// 화살표 함수와 this

// 함수는 두 가지 일처리를 할 수 있음
// 1. return 내보내는 => 일반 함수
// 2. 객체 생성 => 생성자 함수
// 생성자 함수를 일반 함수와 구분하기 위해서 대문자로 시작하는 것이 관례

function Button(text) {
  this.content = text;
}

const a = new Button('more');

// 구조가 같은 객체를 많이 생성하기 위해서 사용
// function으로 만든 함수는 prototype이 있기 때문에 생성자 함수로 기능할 수 있음
// arrow function은 constructor 기능을 넣지 않은 최신 함수이기 때문에 사용할 수 없음
// 생성자만 기능만 넣은 함수는 class

// this : 나를 호출한 대상을 this
// arrow function은 this를 바인딩 하지 않음. window를 호출
// concise function은 constructor가 없어서 가벼움 => 객체의 메소드로 가장 적합
// 5/30 수업

const user = {
  name: 'tiger',
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this.name);
  },

  total: 0,
  grades: [30, 60, 90],
  totalGrades() {
    function sayHi() {
      console.log(this);
    }
    this.sayHi();
    // this.grades.forEach((item) => {
    //   this.total += item;
    // });
    // return this.total;
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

// let pow = (numeric, powerCount) => {
//   let result = 1;

//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }
//   return result;
// };

// const pow = (numeric, powerCount) => {
//   return Array(powerCount)
//     .fill(numeric)
//     .reduce((acc, cur) => {
//       return (acc *= cur);
//     });
// };

const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(numeric)
    .reduce((acc, cur) => (acc *= cur));

// repeat(text: string, repeatCount: number): string;

// let repeat = (text, repeatCount) => {
//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };

// const repeat = (text, repeatCount) => {
//   return Array(repeatCount)
//     .fill(text)
//     .reduce((acc) => {
//       return acc + text;
//     }, '');
// };

const repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(text)
    .reduce((acc) => acc + text, '');
