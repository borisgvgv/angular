interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 50,
  songDuration: 39,
  song: "Monedas al aire",
  details: {
    author: "Carlos Varela",
    year: 1099,
  },
};

// Aplicando la desestructuración ------------------------------------------------------
// consiste en que podamos tomar del objeto ciertas piezas que me interesen

console.log(audioPlayer.song);
console.log(audioPlayer.songDuration);
console.log(audioPlayer.details.author);

console.warn(
  "--- La forma anterior es correcta pero la más eficiente es la que sigue"
);

const { song, songDuration, details } = audioPlayer;
const { author, year } = details;
console.log(
  "Song: ",
  song + ", " + "Duration:",
  songDuration + ", " + "Autor: ",
  author + ", " + "Año: ",
  year
);

// Aplicando la desestructuración de arreglos ------------------------------------------------------
console.warn("Desestructuración de arreglos");

const dbz: string[] = ["Goku", "Vegueta", "Trunks"];
console.error( "Personaje 3: ", dbz[2]);


//----------------------desestructurando

const [,,truncks= "Not found"]: string[] = ["Goku", "Vegueta", "Trunks"];
console.error( "Personaje 3: ", truncks);

const [,,truncks2= "Not found"]: string[] = ["Goku", "Vegueta"];
console.error( "Personaje 3: ", truncks2);
export {};
