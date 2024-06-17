/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

// EX.1
{
  let outside = 'outer';
  console.log(outside);
}

console.log(outside); // outside가 블록스코프 안에 선언되어 있어서 외부에서 찾을 수 없음

// EX.2
{
  var inside = 'inner';
}

console.log(inner); // var는 외부에서 불러올 수 있음

// var는 변수의 중복 선언을 허용합니다
var a = 10;
var a = 20;

// 선언하기 전 사용할 수 있는 var
console.log(c); // 에러가 뜨지 않고 undefined가 출력
var c = 123456;
