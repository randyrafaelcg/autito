function PosFinal(comandos) {
  let posIni="0,0N"
  let grilla=[0,0];
  let comandosSep=comandos.split(",");
  grilla[0]=Number(comandosSep[0]);
  grilla[1]=Number(comandosSep[1]);
  if(comandos=="")
    return posIni;
    else if(grilla = [0,0])
    return posIni;
    
}

export default PosFinal;
