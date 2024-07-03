const template = document.createElement('template');

template.innerHTML = `
  <div>hello</div>
  <div>javascript</div>
`;

const temp = document.querySelector('#temp');
const app = document.querySelector('#app');

const clone = template.content.cloneNode(true);

console.log(template);

app.appendChild(clone);
