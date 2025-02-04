/*En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla. */

//Declaro las variables a utilizar

let listaDeAmigos = [];
let numerosAleatorios = 0;

console.log(listaDeAmigos)

//Función para trabajar con los elementos del html

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //h2
    elementoHTML.innerHTML = texto; //texto
    return;
}

//Función que limpia la pantalla cada vez que se agrega un nombre

function limpiarPantalla(elementoId){
    let nombreLimpio = document.querySelector(elementoId).value = "";
}

//Función que agrega los amigos a la lista

function agregarAmigos(){
    let nuevoNombre = document.querySelector("#amigo").value; //Agregar los nombres
    //Evaluo si es un nombre válido
    if (nuevoNombre === " " || nuevoNombre === ""){
        alert("Por favor ingrese un nombre válido");
    } else {
        //Evaluo si ya está en la lista
        if (listaDeAmigos.includes(nuevoNombre)) {
            asignarTextoElemento("h2","El nombre ya ha sido agregado. Por favor ingrese otro.");
            return agregarAmigos();
        } else {
            asignarTextoElemento("h2","El nombre es válido");
            listaDeAmigos.push(nuevoNombre);
            console.log(listaDeAmigos);
            limpiarPantalla("#amigo");
            mostrarlosEnPantalla();
        }
    }
    return;
}

//Mostrarlos en pantalla

function mostrarlosEnPantalla () {
    listaMostrada = document.getElementById("listaAmigos").value;
    limpiarPantalla("#listaAmigos");
    for (var elemento of listaDeAmigos)
        var li = document.createElement("li");  
        li.innerHTML = elemento;
        document.querySelector("#listaAmigos").appendChild(li);
        return;
    }

//Sortearlos

function sortearAmigos(){
    return;
}