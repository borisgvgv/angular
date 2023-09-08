function adNumbers(a: number, b: number) {
  return a + b;
}
const resultado = adNumbers(5, 5);
console.log({ resultado });

//----------------------------------------------Function number

const adNumbersArrow = (a: number, b: number): number => {
  return a + b;
};
const resultadoArrowFunction: number = adNumbersArrow(4, 5);
console.log({ resultadoArrowFunction });

//----------------------------------------------Function string

const adNumbersArrow2 = (a: number, b: number): string => {
  return `${a + b}`;
};
const resultadoArrowFunction2: string = adNumbersArrow2(4, 5);
console.log({ resultadoArrowFunction2 });

//----------------------------------------------Function con --(firstNumber: number, secondNumber?: number, base: number) -- (argumentoObligatorio, argumentoOpcional?, argumentoFijo).

const multyply = (
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) => {
  return firstNumber * base;
};
const resultadomultyply: number = multyply(4);
console.log({ resultadomultyply });

//----------------------------------------------Function con string --(firstNumber: number, secondNumber?: number, base: number) -- (argumentoObligatorio, argumentoOpcional?, argumentoFijo).

const multyply2 = (
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): string => {
  return `${firstNumber * base}`;
};
const resultadomultyply2: string = multyply2(4);
console.log({ resultadomultyply2 });

console.warn("------------Planteo de Personaje-------------------");

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const healdCaracter = (character: Character, amount: number) => {
  character.hp += amount;
};

const personaje1: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healdCaracter(personaje1, 10);

personaje1.showHp();

export {};
