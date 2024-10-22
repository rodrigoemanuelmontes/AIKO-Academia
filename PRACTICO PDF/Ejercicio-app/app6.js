
/*6-Manipulación de elementos: Crear un párrafo en el HTML y modificar su
contenido usando JS.
 */

function corregirParrafo(){
    const parrafo = document.getElementById("parrafo");
    parrafo.innerText= "Lorem Ipsum fue tomado originalmente de un texto en latín del filósofo romano Cicerón , una conexión que el erudito en latín Richard McClintock hizo en la década de 1980. Ha sufrido cambios significativos a lo largo de los siglos, con palabras eliminadas, acortadas y agregadas";
    parrafo.style.color = "white";
    parrafo.style.backgroundColor= "green"; 
    parrafo.style.fontSize = "30px";

}