function PosFinal(comandos) {
  let posXY=[0,0];
  let grilla=[0,0];
  let Vista="N";
  let posF=["0","0","N"]
  if(comandos!="")
  {
    const Seperado=comandos.split("/");
    grilla=Seperado[0].split(",").map(Number);
    Vista=Seperado[1].replace(/[^EONS]+/, "");
    posXY=Seperado[1].split(/[\D]+/)
    posF[0]=posXY[0].toString();
    posF[1]=posXY[1].toString();
    posF[2]=Vista;
  }
  else
    return posF.join();

  return posF.join();
    
}

export default PosFinal;
