import PosFinal from "./App.js";

describe("Posicion final del autito", () => {
  it("deberia retornar posicion 0,0N por defecto", () => {
    expect(PosFinal("")).toEqual("0,0N");
  });
  it("deberia retornar posicion 0,0N cuando solo se ingresa el tamanio de grilla", () => {
    expect(PosFinal("0,0")).toEqual("0,0N");
  });
});
