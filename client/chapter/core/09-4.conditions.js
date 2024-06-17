/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const width = '10px';
const isActive = false;

console.log(null || width); // 10px
console.log(null ?? width); // 10px

console.log(0 || width); // 10px
console.log(0 ?? width); // 0

console.log(undefined || width); // 10px
console.log(undefined ?? width); // 10px

console.log(isActive || width); // 10px
console.log(isActive ?? width); // false

console.log('' || width); // 10px
console.log('' ?? width); // ''

// a ||= b  a가 false일 때 b를 a에 할당
// a &&= b  a가 true일 때 b를 a에 할당
// a ??= b  a가 undefined, null일 때 b를 a에 할당
