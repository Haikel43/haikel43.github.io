let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/zarin.png') {
      miImage.setAttribute('src','images/hermanos.png');
    } else {
      miImage.setAttribute('src', 'images/zarin.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}

if (!localStorage.getItem('xnx')) 
{
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('xnx');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() 
{
    estableceNombreUsuario();
}