const name: string = "Boricua";

// Definimos que tipo de datos se pueden recibir en la variable creada
let hpPoints: number | string | boolean = 90;
hpPoints = "dato";
hpPoints = true;


//En este caso solo recibirá numbers o la palabra Full como string
let hpPoints2: number | "Full" = 90;
hpPoints2 = "Full";
hpPoints2 = 30;
// hpPoints2 = "Otro string"; // Esto devuelve error porque no es Full
// hpPoints2 = true; // Devuelve error porque la variable no acepta booleanos

let isAlive: boolean = true;
console.log({name, hpPoints, hpPoints2, isAlive});

export {};
