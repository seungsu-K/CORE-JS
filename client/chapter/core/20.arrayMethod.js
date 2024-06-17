/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

typeof [1, 2, 3]; // object

// const typeOf = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

// const isArray = (data) => typeOf(data) === 'array';
// const isNull = (data) => typeOf(data) === 'null';
// const isNumber = (data) => typeOf(data) === 'number';

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'aszfkq',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'zvkkrq',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'gkzqg',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'glzqoe',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  console.log(user.job);
});

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

first.addEventListener('click', () => {
  console.log('first를 클릭하셨습니다.');
});
second.addEventListener('click', () => {
  console.log('second를 클릭하셨습니다.');
});
third.addEventListener('click', () => {
  console.log('third를 클릭하셨습니다.');
});

const span = document.querySelectorAll('span');
// 노드 리스트는 유사 배열

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

/* 원형 파괴 ----------------------------- */

// push
people.push('admin');

// pop
people.pop();

// unshift
// shift
// reverse
const arr = [...people];
arr.reverse();

// splice
// people.splice(1, 1, '안녕');

// sort

function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
const toSorted = people.toSorted(compare);

// toReversed
const toReversed = people.toReversed();

// toSpliced
const toSpliced = people.toSpliced(0, 1);

// map

const nameList = people.map((user) => user.name);

const age = people.map((user) => user.age * 2);

const nameTag = people.map(({ name }) => {
  let template = `<li> 이름 : ${name} </li>`;
  return template;
});

nameTag.forEach((tag) => {
  document.body.insertAdjacentHTML('beforeend', tag);
});

// ul 안에 집어 넣기
const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// 요소를 하나만 찾아줌

const 황 = people.find((item) => item.name === '황선우');

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
// 조건에 맞는 요소를 배열로 반환

const filter = people.filter((item) => item.age > 20);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class='userCard'> ${cur.name} : ${cur.age}</li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split : 문자 -> 배열
const str = 'hello';
const stringToArray = str.split('');

// join
const arrayToString = stringToArray.join('');

// 함수 만들어 보기

const forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }
  return result;
};

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) {
      result.push(a);
    }
  }
  return result;
};

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
  }
  for (const a of i) {
    acc += f(acc, a);
  }
  return acc;
};

_reduce((t, p) => t + p, 0, products);
