/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */
// String으로 형변환

// number

const year = 2024;

console.log(typeof String(year)); // "2024"
console.log(typeof (year + '')); // "2024 "

// undefined, null

let days = null;
console.log(days + ''); // "null "

let friends;
console.log(friends + ''); // "undefined "

// boolean

let isClicked = true;
console.log(typeof (isClicked + '')); // "true "

/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number로 형변환

// undefined

let friend;
console.log(Number(friend)); // NaN

// null

let money = null;
console.log(Number(money)); // 0

// boolean
// true = 1, false = 0

let isMarried = false;
console.log(Number(isMarried)); // 0

let isActive = true;
console.log(Number(isActive)); // 1

// string

let num = '100';
console.log(Number(num)); // 100
console.log(typeof (num * 1)); // number
console.log(typeof (num / 1)); // number
console.log(typeof (num - 0)); // number
console.log(typeof +num); // number

// numeric string

const width = '120.5px';
console.log(width * 1); // NaN

// parseInt 정수만 뽑아줌 => 문자가 시작되는 곳까지
// parseFloat 소수까지 뽑아줌
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */
// true, false로 형변환

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(' ')); // true
console.log(Boolean(123)); // true
