/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');
/* 클래스를 사용한 위임 ---------------- */

// function handleClick(e) {
//   const target = e.target;

//   if (target.matches('.about')) {
//     console.log('about!!');
//   }
//   if (target.classList.contains('home')) {
//     console.log('home!!');
//   }
//   if (target.classList.contains('contact')) {
//     console.log('contact!!');
//   }
// }

/* 속성을 사용한 위임 ------------------ */

// function handleClick(e) {
//   const target = e.target;

//   const name = target.dataset.name;
//   // target.getAttribute('data-name');
//   // attr(target, 'data-name');

//   if (name === 'about') console.log('about!!');
//   if (name === 'home') console.log('home!!');
//   if (name === 'contact') console.log('contact!!');
// }

/* 노드를 사용한 위임 ------------------ */

function handleClick(e) {
  const target = e.target;
  const li = target.closest('li');

  if (!li) return;
  // if (target.tagName !== 'LI') return;
  // ul도 about을 포함하고 있어서 정확히 li를 찾아줘야 댐
  if (li.textContent.includes('ABOUT')) console.log('about!!');
  if (li.textContent.includes('HOME')) console.log('home!!');
  if (li.textContent.includes('CONTACT')) console.log('contact!!');
}

nav.addEventListener('click', handleClick);

//
const navList = document.querySelectorAll('nav li');
navList.forEach((li, i) => {
  li.addEventListener('click', () => {
    console.log(i);

    switch (i) {
      case 0:
        console.log('about');
        break;
      case 1:
        console.log('home');
        break;
      case 2:
        console.log('contact');
        break;
    }
  });
});

console.log(score);

score = 80;
var score;

console.log(score);
