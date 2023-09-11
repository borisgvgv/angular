const skills = ["Bash", "Counter", "Healing"];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string; // El signo ? indica que este dato es opcional, puede pasarse o no al objeto
}

const strider: Character = {
    name: "Srider",
    hp: 100,
    skills: ["Bash", "Counter"],
}

strider.homeTown= "Rivendell";
console.table(strider);

export {};
