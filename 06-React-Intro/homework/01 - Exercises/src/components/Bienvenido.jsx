import React from "react";
import Botones from "./Botones";

const studentName = "¡¡ Carolina Sartini !!";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (<div>
    <h1>Funciona !!!</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map(index => <li> {index} </li>)}
    </ul>
    <Botones alerts={alerts}/>
  </div>);
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
