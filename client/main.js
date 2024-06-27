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
});

const textField = getNode('#textField');
const clear = getNode('button[data-name="clear"]');

function handleTextField() {
  console.log('입력중');

  const value = this.value;

  setStorage('text', value);
}

function handleClear() {
  deleteStorage('text');
  clearContents(textField);
}

textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);
