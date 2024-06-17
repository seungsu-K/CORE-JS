/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자, 피연산자가 1개
let unary = +a;
console.log('unary : ', unary);

// 이항 연산자, 피연산자가 2개
let binary = Number(a) + Number(b);
console.log('binary : ', binary);

// 삼항 연산자
let ternary = a > 10 ? '사실입니다' : '거짓입니다';
console.log('ternary : ', ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;

// 산술 연산자: 곱셈
let multiplication = 10 * 2;

// 산술 연산자: 나눗셈
let division = 10 / 2;

// 산술 연산자: 나머지, 조건문으로 짝수 / 홀수 구분하기
let remainder = 10 % 3; // 1
console.log('remainder : ', remainder);

// 산술 연산자: 거듭 제곱
let power = 2 ** 10; // 1024
console.log('power : ', power, Math.pow(2, 10));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues); // 1,2,34,5,6 => [1, 2, 3].toString + [4, 5, 6].to String

onlyWorkDefaultValues = [1, 2, 3].concat([4, 5, 6]);
console.log(onlyWorkDefaultValues);

let first = [1, 2, 3];
let second = [4, 5, 6];

// spread syntax    (전개 구문)
// spread operator  (전개 연산자)

console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter = 0;
console.log(++counter); // 1
console.log(counter); // 1
console.log(counter++); // 1
console.log(counter); // 2

// 복합 할당 연산자
counter += 1;
counter = counter + 1;

counter -= 1;
counter = counter - 1;

counter *= 2;
counter = counter * 2;

counter /= 2;
counter = counter / 2;

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 135

// let total = count % 4;

// count = count / 2;

// let pow = count ** 3;

// totla = tolal * count + pow;

// console.log(total;)