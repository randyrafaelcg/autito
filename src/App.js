/**/

function PosFinal(comandos) {
  let posXYini=[0,0];
  let posXY=[0,0];
  let grilla=[0,0];
  let Vista="N";
  let posF=["0","0","N"]
  let instruccion;
  if(comandos!="")
  {
    const Seperado=comandos.split("/");
    grilla=Seperado[0].split(",").map(Number);
    Vista=Vistafunc(comandos);
    instruccion=Instrucciones(comandos);
    posXYini=PosINI(comandos);
    posXY=posXYini;
    instruccion.forEach(element => {
      if(element=="I" || element=="D" || element=="0")
        Vista = Rotar(Vista,element);
        else if(element == "A")
        {
          posXY=mover(Vista,posXY,grilla);
        }
        else
        {
          posXY=Saltar(Vista,posXY,grilla);
        }
    });
    posF[0]=posXY[0].toString();
    posF[1]=posXY[1].toString();
    posF[2]=Vista;
  }
  else
    return posF.join();

  return posF.join();
}

function PosINI(comandos)
{
  const Seperado=comandos.split("/");
  return Seperado[1].split(/[\D]+/)
}

function Instrucciones(comandos)
{
  const Seperado=comandos.split("/");
  return Seperado[2].split("");
}

function Vistafunc(comandos)
{
  const Seperado=comandos.split("/");
  return Seperado[1].replace(/[^EONS]+/, "");
}
function Rotar(vista,comando)
{
  if(comando == "I")
  {
    if(vista=="N")
      return "O";
      else if(vista=="O")
        return "S";
      else if(vista=="S")
        return "E";
      else if(vista=="E")
        return "N";
  }
  else if(comando=="D")
  {
    if(vista=="N")
      return "E";
      else if(vista=="E")
        return "S";
      else if(vista=="S")
        return "O";
      else if(vista=="O")
        return "N";
  }
  else return vista;
}

function mover(vista, posXY,grilla)
{
  if(vista=="N")
    posXY[1]++;
    else if(vista=="E")
    posXY[0]++;
    else if(vista=="S")
    posXY[1]--;
    else if(vista=="O")
    posXY[0]--;

  if(posXY[1]>grilla[1])
    posXY[1]=grilla[1];
    else if(posXY[1]<0)
    posXY[1]=0;
  if(posXY[0]>grilla[0])
    posXY[0]=grilla[0];
    else if(posXY[0]<0)
    posXY[0]=0;

  return posXY;
}

function Saltar(vista, posXY ,grilla)
{
  if(vista=="N")
  {
    posXY[1]++;
    posXY[1]++;
  }
  else if(vista=="S")
  {
    posXY[1]--;
    posXY[1]--;
  }
  return posXY;
}


export {PosFinal,PosINI,Instrucciones,Vistafunc};
