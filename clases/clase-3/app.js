//formas de acceder al DOM
// document.getElementById()

const saludo = document.getElementById("presentacion");
console.log(saludo)


//documente.getElementByClassName();
const rojo = document.getElementsByClassName("tituloRojo");
console.log(rojo)

//document.querySelector();
const element = document.querySelector(".tituloRosa");
console.log(element)

//document.querySelectorAll();

const todosElementos = document.querySelectorAll(".tituloRosa");
console.log(todosElementos)

// document.getElementByTagName();
const saludoCurso = document.getElementsByTagName("h3");
console.log(saludoCurso)

//document.getElementByName();

const elementosName = document.getElementByName("nombre");
console.log(elementosName)