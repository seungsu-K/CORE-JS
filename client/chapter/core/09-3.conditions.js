/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;

switch (a) {
  case 10:
    console.log('10입니다');
    break;

  case 11:
    console.log('11입니다');
    break;

  case 12:
    console.log('12입니다');
    break;

  default:
    console.log('10, 11, 12가 없습니다');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다');
    break;

  case DINNER:
    console.log('동네늘 한바퀴 조깅한다');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('디스코드를 켠다');
} else if (thisTime === LUNCH) {
  console.log('체력 보충을 위한 잠을 잔다');
} else if (thisTime === DINNER) {
  console.log('수업 내용을 복습하세요');
} else if (thisTime === NIGHT) {
  console.log('내일 수업을 예습하세요');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('꿈속에서 배웠던 코드를 만듭니다');
}

/* switch vs. if -------------------------------------------------------- */

// 변수에 담는다 => prompt를 통해서 숫자를 입력 받는다 (0~6까지)
const inputNum = +prompt('0~6까지 입력해 주세요');

// switch case 문을 사용해서

// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토

// Separation of concerns (관심사의 분리)

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay() {
  const inputNum2 = getRandom(7);
  console.log(inputNum2);

  switch (inputNum2) {
    case 0:
      return '일';

    case 1:
      return '월';

    case 2:
      return '화';

    case 3:
      return '수';

    case 4:
      return '목';

    case 5:
      return '금';

    case 6:
      return '토';
  }
}

function weekend() {
  // getDay 실행해서 요일을 받아옴
  const today = getDay();

  if (today === '토' || today === '일') {
    return '주말입니다.';
  } else {
    return '평일입니다.';
  }
  // 토, 일 => 주말입니다.
  // 평일입니다.

  // includes 조건
  // if (today.includes('토') || today === '일') {
  //   return '주말입니다.';
  // } else {
  //   return '평일입니다.';
  // }

  // 삼항식 표현
  // const day = (today === '토' || today ==='일') ? '주말입니다.' : '평일입니다.'
  // return day;
}
