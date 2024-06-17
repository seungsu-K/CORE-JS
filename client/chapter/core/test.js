function solution(emergency) {
  let answer = [];

  let b = [...emergency];
  b = b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    emergency[i] = b.indexOf(emergency[i]) + 1;
  }

  return (answer = emergency);
}

let a = [1, 20, 10];
let answer = [];

let b = [...a];
b = b.sort((a, b) => b - a);

for (let i = 0; i < a.length; i++) {
  a[i] = b.indexOf(a[i]) + 1;
}
