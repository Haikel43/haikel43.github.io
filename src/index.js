/*Este codigo permite alternar entre dos imagenes en la misma posición,
ambas deben llevar la clase altenar y una de las dos debe llevar la
clase inactive (esta cambia el display a none en el css)*/

const imagenAlternar = document.querySelectorAll('.alternar');
const imagenAlternarToArray = Array.apply(null, imagenAlternar);
const imagenAlaternarArrayPorPar = [];

function altenarImagen(arr) {
   arr.forEach(function(element) {
    if (arr.indexOf(element) % 2 == 0) {
        imagenAlaternarArrayPorPar.push([element, arr[arr.indexOf(element)+1]])
    }
   });
   imagenAlaternarArrayPorPar.forEach(function(par) {
    par.forEach(function(item) {
        item.addEventListener('mouseover', retro);
        item.addEventListener('mouseout', retro);
        function retro(){
            toggle(par);
        } 
    })
})
}

function toggle(nodeList) {
    nodeList.forEach(function(item) {
        item.classList.toggle('inactive');
    })
}

altenarImagen(imagenAlternarToArray);

/* */

const menuClosers = document.querySelectorAll('.closer');
const menuClosersToArray = Array.apply(null, menuClosers);

function menuDisplay(arr) {
    arr.forEach(function(item) {
        item.addEventListener('click', closers);
        console.log(item);
        function closers(){
            display(arr);
        }
    });
    function display(arr){
        arr.forEach(function(item) {
            item.classList.toggle('inactive');
        })    
    }    
}

menuDisplay(menuClosersToArray);

