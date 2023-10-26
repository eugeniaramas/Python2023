var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://www.google.com/books/jsapi.js';
document.body.appendChild(script);

// Función que se llama cuando se carga la API de Google Books
function onGoogleBooksApiLoad() {
  google.books.load();

  function initialize() {
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load('ISBN:9688382302');
  }

  google.books.setOnLoadCallback(initialize);
}

let header = `
<h2>MAR SIN PLASTICO</h2>
<nav>
    <a class="boton" href="Tp con grid.html">Inicio</a>
    <a class="boton" href="quienes_somos.html">Quienes somos</a>
    <a class="boton" href="nuestrosobjetivos.html">Nuestros Objetivos</a>
    <a class="boton" href="puntosverdes.html">Puntos Verdes</a>
    <a class="boton" href="contacto.html">Contacto</a>


</nav>
`
document.getElementById("idheader").innerHTML = header


let footer = `
<a href="mailto:reciclemosjuntos@mail.com" target="_blank"><img src="../IMG/gmail.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.facebook.com" target="_blank"><img src="../IMG/facebook.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.instagram.com" target="_blank"><img src="../IMG/instagram.png" alt="logo email" width="2%">
        </a>
        <a href="https://www.twitter.com" target="_blank"><img src="../IMG/gorjeo.png" alt="logo email" width="2%">
        </a>
        <br>
        <p>Derechos reservados @2023</p>
        <a href="#arriba">🔼</a>
`
document.getElementById("idfooter").innerHTML = footer