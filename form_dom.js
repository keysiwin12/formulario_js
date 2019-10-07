

// var datoNombre = document.createElement('p');
// console.log(datoNombre);

// var contenidoNombre = document.createTextNode("nomb");
// // console.log(contenidoNombre);

// datoNombre.appendChild(contenidoNombre);

// var contenedorNombre = document.getElementById("datos");

// contenedorNombre.appendChild(datoNombre);




var enviar = document.getElementById("subm");



function mostrarNombre() {

    var datoNombre = document.createElement('p');

    var contenidoNombre = document.createTextNode("Nombre: " + document.getElementById("nomb").value);

    datoNombre.appendChild(contenidoNombre);

    var contenedorNombre = document.getElementById("datos");

    contenedorNombre.appendChild(datoNombre);

}

function mostrarTelefono() {

    var datoTelefono = document.createElement('p');

    var contenidoTelefono = document.createTextNode("Telefono: " + document.getElementById("cel").value);

    datoTelefono.appendChild(contenidoTelefono);

    var contenedorTelefono = document.getElementById("datos");

    contenedorTelefono.appendChild(datoTelefono);

}




function mostrarDatos() {
    mostrarNombre();
    mostrarTelefono();
}


enviar.addEventListener("click",mostrarDatos);








