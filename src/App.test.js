import PosFinal from "./App.js";

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
});