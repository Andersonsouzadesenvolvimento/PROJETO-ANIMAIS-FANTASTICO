const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('ativo');


if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}else{
  menu.classList.add('não-possui-azul');
}


menu.className += menu.className + 'vermelho'

console.log(menu.className);



const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('alt'))



const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`andou ${km}`)
  }
}


const itensMenu = document.querySelector('.menu a');

itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');
