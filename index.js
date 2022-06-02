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
