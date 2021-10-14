import {PosFinal,PosINI,Instrucciones,Vistafunc} from "./App.js";

describe("Posicion final del autito sin comandos para avanzar", () => {
  it("deberia retornar posicion 0,0,N por defecto", () => {
    expect(PosFinal("")).toEqual("0,0,N");
  });
  it("deberia retornar posicion 0,0N cuando por la grilla 0,0", () => {
    expect(PosFinal("0,0/0,0N/0")).toEqual("0,0,N");
  });
  it("deberia retornar posicion 0,0E cuando por la grilla 0,0", () => {
    expect(PosFinal("0,0/0,0E/0")).toEqual("0,0,E");
  });
  it("deberia retornar posicion 1,1E cuando no hay comandos para moverse", () => {
    expect(PosFinal("1,1/1,1E/0")).toEqual("1,1,E");
  });
  it("deberia retornar posicion 2,2S cuando no hay comandos para moverse", () => {
    expect(PosFinal("5,5/2,2S/0")).toEqual("2,2,S");
  });
});

describe("Posicion final del autito con comandos para rotaciones", () => {
  it("deberia retornar posicion rotada", () => {
    expect(PosFinal("5,5/0,0N/I")).toEqual("0,0,O");
  });
  it("deberia retornar posicion rotada 2 veces izquierda", () => {
    expect(PosFinal("5,5/0,0N/II")).toEqual("0,0,S");
  });
  it("deberia retornar posicion rotada izquierda derecha", () => {
    expect(PosFinal("5,5/0,0N/ID")).toEqual("0,0,N");
  });
  it("deberia retornar posicion rotada segun mas comandos de rotacion", () => {
    expect(PosFinal("5,5/0,0N/IDD")).toEqual("0,0,E");
  });
  it("deberia retornar posicion rotada segun mas comandos de rotacion", () => {
    expect(PosFinal("5,5/0,0E/IDD")).toEqual("0,0,S");
  });
  it("deberia retornar posicion rotada segun mas comandos de rotacion", () => {
    expect(PosFinal("5,5/0,0O/IDDD")).toEqual("0,0,E");
  });
  it("deberia retornar posicion rotada segun mas comandos de rotacion", () => {
    expect(PosFinal("5,5/0,0E/IIIII")).toEqual("0,0,N");
  });
});

describe("Pruebas avanzando el autito", () => {
  it("deberia retornar posicion avanzando el autito una vez", () => {
    expect(PosFinal("5,5/0,0N/A")).toEqual("0,1,N");
  });
  it("deberia retornar posicion avanzando el autito dos veces", () => {
    expect(PosFinal("5,5/0,0N/AA")).toEqual("0,2,N");
  });
  it("deberia retornar posicion avanzando el autito dos veces desde una pos distinta a 0,0", () => {
    expect(PosFinal("5,5/0,1N/AA")).toEqual("0,3,N");
  });
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/0,2N/AAAA")).toEqual("0,5,N");
  });
  it("deberia retornar posicion avanzando el autito una vez en direccion este (X)", () => {
    expect(PosFinal("5,5/0,0E/A")).toEqual("1,0,E");
  });
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/3,0E/AAA")).toEqual("5,0,E");
  });
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/3,0O/AAA")).toEqual("0,0,O");
  });
});

describe("Posicion final del autito combinando comandos", () => {
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/0,0N/ADAA")).toEqual("2,1,E");
  });
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/3,3E/AADAADADDA")).toEqual("5,1,E");
  });
  it("deberia retornar posicion avanzando el autito mas alla del tope de la grilla", () => {
    expect(PosFinal("5,5/1,2N/IAIAIAIAA")).toEqual("1,3,N");
  });
});

describe("Posicion final del autito Comando saltar", () => {
  it("deberia retornar posicion avanzando el autito dos veces con el comando saltar", () => {
    expect(PosFinal("5,5/0,0N/S")).toEqual("0,2,N");
  });
  it("deberia retornar posicion avanzando el autito con mas comandos saltar", () => {
    expect(PosFinal("5,5/0,0N/SS")).toEqual("0,4,N");
  });
  it("deberia retornar posicion avanzando el autito con mas comandos saltar con diferentes vistas", () => {
    expect(PosFinal("5,5/0,5S/SS")).toEqual("0,1,S");
  });
});