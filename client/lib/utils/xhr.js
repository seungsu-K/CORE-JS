const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// [readystate]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

// 객체 합성 minin

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data);
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 매개 변수 바꾸기

xhr({
  method: 'POST',
  url: ENDPOINT,
  body: user,
  성공(data) {},
  // 유저 정보 랜더링 해줘, 게시판 정보 랜더링 해줘
  // => 다양한 요청을 처리하기 위해서(재사용성 올리기 위해서)
  // => 함수 안에서 데이터 가공을 하지 않음
  실패(error) {},
});

// 함수도 객체이기 때문에 메서드를 넣을 수 있음

xhr.get = (url, 성공, 실패) => {
  xhr({
    url,
    성공,
    실패,
  });
};

xhr.post = (url, body, 성공, 실패) => {
  xhr({
    method: 'POST',
    body,
    url,
    성공,
    실패,
  });
};

xhr.put = (url, body, 성공, 실패) => {
  xhr({
    method: 'PUT',
    body,
    url,
    성공,
    실패,
  });
};

xhr.delete = (url, 성공, 실패) => {
  xhr({
    method: 'DELETE',
    url,
    성공,
    실패,
  });
};

// xhr Promise 방식

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, headers, errorMessage } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  // const { method, url, body, headers, errorMessage } = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   url: ENDPOINT,
// }).then((result) => {
//   console.log(result);
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({ url, body, method: 'POST' });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({ url, body, method: 'PUT' });
};

xhrPromise.delete = (url) => {
  return xhrPromise({ url, method: 'DELETE' });
};
