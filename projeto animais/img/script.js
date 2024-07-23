const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});


paragrafos.forEach((item) => {
  console.log(item.innerText);
});

let i = 0;
img.forEach(() => {
  console.log(i++);
});

img.forEach(() => i++);

console.log(i);

