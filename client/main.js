/* global gsap */

import {
  clearContents,
  deleteStorage,
  getNode,
  getStorage,
  setStorage,
} from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then(console.log);

// const getData = async () => {
//   const data = await xhrPromise.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//   console.log(data);
// };

// getData();

const ENDPOINT = 'http://localhost:3000/users';

getStorage('text').then((res) => {
  textField.value = res;
  // 새로고침 했을 때 기본값으로 남겨줌
});

const textField = getNode('#textField');
const clear = getNode('button[data-name="clear"]');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function handleClear() {
  deleteStorage('text');
  clearContents(textField);
}

textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);
