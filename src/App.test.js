import PosFinal from "./App.js";

describe("PosFinal", () => {
  it("deberia retornar posicion 0,0N por defecto", () => {
    expect(PosFinal("")).toEqual("0,0N");
  });
  
});
