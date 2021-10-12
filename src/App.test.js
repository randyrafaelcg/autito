import PosFinal from "./App.js";

describe("Posicion final del autito", () => {
  it("deberia retornar posicion 0,0,N por defecto", () => {
    expect(PosFinal("")).toEqual("0,0,N");
  });
  it("deberia retornar posicion 0,0N cuando por la grilla 0,0", () => {
    expect(PosFinal("0,0/0,0N/0")).toEqual("0,0,N");
  });
  it("deberia retornar posicion 0,0E cuando por la grilla 0,0", () => {
    expect(PosFinal("0,0/0,0E/0")).toEqual("0,0,E");
  });
});
