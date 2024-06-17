/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty); // object => 오류임

// 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof undef); // undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello'; // string literal
const single = 'hello';
const backtick = `hello ${10 + 5 + double + single}`;

console.log(backtick); // 'hello 15hello hello'
console.log(typeof backtick); // string

const str = new String('hello');
console.log(typeof str); // object

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150; // number literal
const floatingPointNumber = 10.5;
const inf = Infinity;
const infMinus = -Infinity;
const nan = NaN;

const num = new Number(150);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt); // bigint

// BigInt는 new 키워드를 붙이지 않아도 됨
const b = BigInt(111);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
console.log(typeof isActive); // boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = { name: 'tiger' }; // object literal
const obj2 = new Object({ name: 'lion' }); // contructor function

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');
console.log(typeof id); // symbol

id === id2; // false

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b;
  },

  sayHi: function () {
    // 1. normal function
    return 'hello';
  },

  sayHi2: () => {
    // 2. arrow function
    return 'hi';
  },

  sayHi3() {
    // 3. concise method
    return 'hola';
  },
};

console.log(user.name);

// Array

const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  { name: 'tiger' },
  function () {},
  [1, 2, 3],
]; // array literal

const newArray = new Array(1, 2, 3);

// function

function sum(a, b) {
  return a + b;
}

function 붕어빵틀(재료) {
  return `따근따끈 맛있는 ${재료} 맛 붕어빵`;
}

const 팥붕 = 붕어빵틀('팥');

// this
