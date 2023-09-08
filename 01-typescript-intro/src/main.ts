import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
//import "./topics/01-basic-types";
//import "./topics/objects-interface";
//import "./topics/03-functions";
//import "./topics/04-homework-types";
//import "./topics/05-basic-destructuring";
import "./topics/06-functions-destructuring";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <div class="card">
  Hola mundo
  </div>
`;
console.log("Hola mundo");
