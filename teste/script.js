const total = data[0].nivel1.length
const random = Math.floor(Math.random()*(total))
const licao = data[0].nivel1[random]
var lista = []

licao.silaba.forEach(s =>{
    //board
    var board = document.createElement('div');
    board.classList.add('board')

    document.querySelector("div.boards").appendChild(board);

    //caixa
    var caixa = document.createElement('div');
    caixa.setAttribute('id', s);
    caixa.classList.add(s);
    caixa.classList.add('dropzone');
    caixa.classList.add('estilo');
    board.appendChild(caixa);

    //silaba
    var silaba = document.createElement('div');
    silaba.textContent = s;
    silaba.classList.add(s)
    silaba.classList.add('card')
    silaba.classList.add('silaba')
    silaba.setAttribute('draggable', true);
    lista.push(silaba);
  })
  licao.resto.forEach(r =>{
  //RESTO
  var resto = document.createElement('div');
  resto.textContent = r;
  resto.classList.add('card')
  resto.classList.add('silaba')
  resto.setAttribute('draggable', true);
  lista.push(resto);
  })
  console.log(lista)

  let ttSilabas = Math.floor(Math.random()*(lista.length ))

  for (let index = 0; index < lista.length; index++) {
     lista.push(lista[ttSilabas]);
     lista.splice(ttSilabas, 1);

     ttSilabas = Math.floor(Math.random()*(lista.length ))
   } 

   console.log(lista)

  for (let index = 0; index < lista.length; index++) {

   // Math.floor(Math.random()*(lista.length 
    document.getElementById("caixa").appendChild(lista[index]);
   // lista.remove[]
  } 

  

  document.querySelector("img").setAttribute('src', "../imagens/"+licao.palavra+".jpg" );



const cards     = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const boards    = document.querySelectorAll('.board')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag'     , drag     )
    card.addEventListener('dragend'  , dragend  )
})

function dragstart() {
   dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
   this.classList.add('is-dragging')
}
function drag() {
}
function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
    this.setAttribute('draggable', 'true')

    

    const caixas = this.parentElement.className.split(" dropzone estilo")
    const silaba = this.className.split(" card silaba")
    
    if (silaba[0] != caixas[0]) {

        //colocar audio de erro
       document.getElementById("caixa").appendChild(this)

    }else{
        let count = 0
     dropzones.forEach( wi => {
         
        if (wi.children.length == 1){
            count ++
        }
     })
     this.setAttribute('draggable', 'false')
     count == dropzones.length ? alert("Voc?? ?? demais!!!") : ""
     
    }
    
}
 dropzones.forEach( dropzone => {
     dropzone.addEventListener('dragenter', dragenter)
     dropzone.addEventListener('dragover' , dragover )
     dropzone.addEventListener('dragleave', dragleave)
     dropzone.addEventListener('drop'     , drop     )
 })

 function dragenter() {

 }
 function dragover() {
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
 }
 function dragleave() {
    this.classList.remove('over')
}
function drop() {
}


