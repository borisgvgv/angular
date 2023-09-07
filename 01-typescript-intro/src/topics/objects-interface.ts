const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string; // ? opcional o undefined si se quiere añadir a strider quitar el ? y "comand . add property"
}

const strider: Character= {
    name: "Strider",
    hp: 100,
    skills: ["Basch", "Counter"],
   
}

strider.homeTown= "Rivendell";
console.table(strider);

export {};
