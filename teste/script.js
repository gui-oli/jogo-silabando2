
const cards     = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const boards    = document.querySelectorAll('.board')

/* our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag'     , drag     )
    card.addEventListener('dragend'  , dragend  )
})

function dragstart() {
   // console.log('CARD: Start dragging')
   dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

   this.classList.add('is-dragging')
}
function drag() {
    //console.log('CARD: Is dragging')
}
function dragend() {
    //console.log('CARD: Stop drag')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    
    this.classList.remove('is-dragging')
   this.setAttribute('draggable', 'true')
   
   //document.getElementById('card1').removeAttribute('draggable',false)
   //this.parentElement.setAttribute('ondrop', 'false')
   const caixas = this.parentElement.className.substring(0,2)
   const silaba = this.className.substring(0,2)

    if (silaba != caixas) {

       document.getElementById("caixa").appendChild(this)

       
        
    }else{

        console.log(dropzones.length)
        let count = 0
     dropzones.forEach( wi => {
         
         
         if (wi.children.length == 1){
             count ++
         }

     })

     count == dropzones.length ? alert("VITORIA!!!") : ""
     
    }

    
    
}
 /*place where we will drop cards */
 dropzones.forEach( dropzone => {
     dropzone.addEventListener('dragenter', dragenter)
     dropzone.addEventListener('dragover' , dragover )
     dropzone.addEventListener('dragleave', dragleave)
     dropzone.addEventListener('drop'     , drop     )
 })

 function winner() {
    console.log(this.children.className)

 }

 function dragenter() {

 }
 function dragover() {
    

    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

   
    this.appendChild(cardBeingDragged)
    
 }
 function dragleave() {
    this.classList.remove('over')
    
}
function drop() {

    
}