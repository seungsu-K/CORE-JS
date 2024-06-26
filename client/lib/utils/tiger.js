const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// fetch => promise

const tiger = async () => {
  const response = await fetch(ENDPOINT);
  let data;

  if (response.ok) {
    // response.data = await response.json();
    data = await response.json();
  }

  console.log(data);

  return data;
};

// const response = await tiger();

console.log(await tiger());
