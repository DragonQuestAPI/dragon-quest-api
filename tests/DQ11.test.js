const game = require("../src/models/DQ11/game.js");

describe("Game Model", () => {
  const expected = game.find();
  it("... must be of type object", () => {
    expect(typeof expected).toBe("object");
  });
});
