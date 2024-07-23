//const img= document.querySelector('img');
//const imgTop = img.offsetTop;

//console.log(imgTop);

// retorno

//function somaImagens() {
//const imagens = document.querySelectorAll('img');
//let soma = 0;
//imagens.forEach((imagem) => {
  //soma = soma + imagem.offsetWidth;
//});
//console.log(soma);

//}
//window.onload = function() {
 //somaImagens();
//}

// verifique se os links da pagina possuem 


//const links = document.querySelectorAll('a');

//links.forEach((link)=> {
  //const linKWidth = link.offsetWidth;
  //const linkHeigth = link.offsetHeight;
  //if(linKWidth >= 48 && linkHeigth >= 48){
    //console.log(link, 'Possui boa acessibilidade')
  //}else{
   // console.log(link, 'Não Possui boa acessibilidade')
  //}
//});

//const browserSmall = window.matchMedia('(max-width: 720px)').//matches;

//if(browserSmall){
//const menu = document.querySelector('.menu');
//  menu.classList.add('menu-mobile');
//}

/*const img = document.querySelector('img');

function callback(tudobem) {
  console.log('clicou');
}

img.addEventListener('click', callback)


const imagensLista = document.querySelector('.animais-lista');

animaisLista.addEventListener('click', callbackLista);
*/


/*const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}
 h1.addEventListener('click', handleEvent);
 h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)

window.addEventListener('keydown', handleEvent)
*/


function handleKeybord(event){
  console.log(event.key);
}

window.addEventListener('keydown', handleKeyborde)


 