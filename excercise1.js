// Escribir un programa que tome un parráfo y subraye todas las palabra con más de 8 caracteres.

const parrafo1 = document.getElementsByClassName("paragraphs").item(0);
const parrafo2 = document.getElementsByClassName("paragraphs").item(1);
const parrafo3 = document.getElementsByClassName("paragraphs").item(2);

const underlineParagraph = (p) => {
  let underlineParagraph = p.textContent
    .split(" ") //--> Crea un array en donde cada elemento es la palabra separada por un espacio.
    .map((word) => (word.length >= 8 ? (word = `<u>${word}</u>`) : word)) // --> Recorre el array creado y a cada palabra mayor a 8 letras la subraya.
    .join(" "); // --> Convierte al array en un string
  p.innerHTML = underlineParagraph; // --> La copia de innerHTML es igual a la constante let que se trabajo arriba
};

underlineParagraph(parrafo1);

// ---------------------------------------------------------------------------------------------------------------
//Escribir un programa que tenga un contador de palabras.
// ---------------------------------------------------------------------------------------------------------------

const returnCountWords = (p) => {
  let countWords = p.textContent.trim().split(" ").length; // --> trim() elimina los espacios en blanco en ambos extremos del string (espacio, tabulacion, saltos de lineas, etc). split() crea un array donde los elementos son cada palabra separada por un espacio. y .length cuenta cuantos elementos tiene ese string.

  p.innerHTML = countWords;
};

returnCountWords(parrafo2);

// ----------------------------------------------------------------------------------------------------------------
/* Escribir un programa que tome una serie de oraciones y que escriba una oración por línea: Ejemplo:
Hola mundo. Cómo están? Yo bien, les cuento que hoy veremos un tema nuevo. Un tema muy difícil.
Debería transformarse en:
Hola mundo.
Cómo están?
Yo bien, les cuento que hoy veremos un tema nuevo.
Un tema muy difícil. */
// -----------------------------------------------------------------------------------------------------------------

const returnSentences = (p) => {
  let letters = p.textContent.trim().split(""); // --> Al estar escritp split sin espacio en los () separa letra por letra

  p.innerHTML = letters
    .map(
      (letter) =>
        letter === "." || letter === "?" ? (letter = `${letter}</br>`) : letter // --> Recorro letters con la condicion de si el signo es igual a un . o a una ?, entonces me devuelva la oracion separada por un salto de linea.
    )
    .join(""); // --> Transforma el array que se habia creado arriba en string y vuelve a juntar todas las letras
};

returnSentences(parrafo3);
