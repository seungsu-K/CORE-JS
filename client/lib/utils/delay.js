import { getNode, insertLast } from '../dom/index.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

// console.log(p);
// console.log(p.PromiseState); // undefined

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '오류',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };
  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldRejected, data, errorMessage, timeout = 1000 } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP({
//   shouldRejected: false,
// });

// delayP()
//   .then(
//     (resolve) => {
//       console.log(resolve);
//       return delayP();
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then((resolve) => {
//     console.log(resolve);
//   });

// delayP()
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   });

// async 함수는 무 조 건 Promise object를 반환한다.
// await 1. result 꺼내오기
//       2. 코드 실행 흐름 제어

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기();

// 포켓몬

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/27');

  console.log();

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
