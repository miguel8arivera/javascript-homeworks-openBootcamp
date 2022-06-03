//? Primer Trabajo

console.log(
  "Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo."
);

//? Segundo Trabajo

const user = ["Miguel", 27, true, 28, 10, 1995];

console.log(user);

const libro = {
  titulo: "El señor de los anillos",
  author: "J.R.R. Tolkien",
  date: "1954-09-29",
  url: "https://www.google.com/search?q=el+senor+de+los+anillos&rlz=1C1CHBF_esES831ES831&oq=el+senor+de+los+anillos&aqs=chrome..69i57j0l5.3168j0j7&sourceid=chrome&ie=UTF-8",
};

console.log(libro);

//? Tercer Trabajo

// for

for (let i = 10; i > 0; i--) {
  console.log(i);
}

//while

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// while con una bifurcación if y una sentencia break

start = 10;
while (true) {
  console.log(start);
  start--;
  if (start === 0) {
    break;
  }
}

//? Cuarto Trabajo

let name = "Miguel";
let surname = "Ochoa";

let student = `${name} ${surname}`;

let studentUpper = student.toUpperCase();

let studentLower = student.toLowerCase();

let space = student.length;

let firstLetter = name.charAt(0);

console.log(firstLetter);

let lastLetter = surname.charAt(surname.length - 1);

console.log(lastLetter);

let whitoutSpace = student.trim();

console.log(whitoutSpace);

let bol = student.includes("Miguel");

console.log(bol);

//? Quinto Trabajo

let altura = 170;

let alturafloat = 1.7;

let peso = 70.31;

alturaRend = Math.round(alturafloat);

pesoRedondeado = Math.floor(70.31);

let palabra = "el máximo valor que se puede obtener en Javascript + 1";

let resultado = palabra.replace("el", "al");

let final = resultado.split("+ 1").join("");

//? Sexto Trabajo

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ["Pan", "Pollo", "Yogurt", "Agua", "Pizza", "Vegetales"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.unshift("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.shift();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const movies = [
  { title: "Thor", director: "Russo", year: 2019 },
  { title: "Once upon a time ", director: "Alpachino", year: 2020 },
  { title: "Doctor Strange", director: "Rami", year: 2022 },
  { title: "Loco de Amor", director: "Jorge Lucas", year: 2009 },
  { title: "Una peli mas", director: "Cameron", year: 2000 },
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const movies2010 = movies.filter((movie) => movie.year < 2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const director = movies.map((movie) => movie.director);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titleMovie = movies.map((movie) => movie.title);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const union = movies.map((value) => `${value.director}- ${value.title}`);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const director1 = movies.map((movie) => movie.director);
const title1 = movies.map((movie) => movie.title);

const spred = [...director1, ...title1];

//? septimo Trabajo

// - Un nuevo Set con los nombres de tu familia

const family = [{ wife: "Elizabeth", son: "Ignacio", father: "Miguel" }];

const mySet = new Set(family);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

mySet.add("Miguel");

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
const nameFamily = new Set(["Elizabeth", "Miguel", "Benjamin", "Scharly"]);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nameFamily.add("Javascript");

//? Octavo Trabajo

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const data = {
  name: "Miguel",
  surname: "Ochoa",
  age: 27,
  height: 1.7,
  isDeveloper: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior.
const age = data.age;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s.

const dataTotal = [
  { ...data },
  {
    name: "Benjamin",
    surname: "Ochoa",
    age: 10,
    height: 1.5,
    isDeveloper: false,
  },
  {
    name: "Arthur",
    surname: "Bavae",
    age: 24,
    height: 1.5,
    isDeveloper: false,
  },
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ageOrder = dataTotal.sort((a, b) => a.age - b.age);
