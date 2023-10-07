// h1{ color: red; }
// .clase {...}
// #id {...}

const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const ps = document.querySelectorAll("p");
// const parrafoClass = document.querySelector(".parrafo");
const resultado = document.querySelector("#result");
const numero1 = document.querySelector("#calculo1");
const numero2 = document.querySelector("#calculo2");
// console.log(input.value);
// console.log({
//     h1, p, parrafoClass, parrafoId, input
// });

// h1.innerHTML = "Titulo <br> modificado!"; //modifica el html de la etiqueta seleccionada
// h1.innerText = "Titulo <br> modificado!";  //modifica solo el texto de la etiqueta seleccionada
// console.log(h1.getAttribute("pantalla")); //obtiene el valor del atributo del selector html
h1.setAttribute("pantalla", "platziNew"); //modifica el valor que tiene el atributo del selector html
h1.classList.add("rojo");  //otra forma de agregar clases especificamente
h1.classList.add("rojo"); //elimina alguna clase del selector html
h1.classList.toggle("rojo"); //pone y quita la clase cuando se ejecute esta linea de codigo
h1.classList.contains("rojo"); //devuelve true o false si consiguio la clase en el selector
// input.value = "456"; //modufica el valor por defecto

const img = document.createElement('img');
img.setAttribute('src', 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg');
h1.append(img);

function Calcular(){
    console.log(parseInt(numero1.value) + parseInt(numero2.value));
    const sumaInput = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.innerHTML = "Resultado:  " + sumaInput;
}

