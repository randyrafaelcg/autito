import {PosFinal,PosINI,Instrucciones,Vistafunc} from "./App";

const comandosdoc = document.querySelector("#comandos-input");
const formT = document.querySelector("#autito-form");

formT.addEventListener("submit", (event) => {
  event.preventDefault();
  let PosiFinal=PosFinal(comandosdoc.value);
  let PosiIni=PosINI(comandosdoc.value);
  //alert(comandosdoc.value +"   "+PosiFinal);
  document.getElementById('Posinicial').innerHTML = PosiIni+Vistafunc(comandosdoc.value);
  document.getElementById('ComandosExt').innerHTML = Instrucciones(comandosdoc.value);
  document.getElementById('Posicionfinal').innerHTML = PosiFinal;
});
