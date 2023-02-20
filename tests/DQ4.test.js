const accessories = require("../src/models/DQ4/accessories.js");
const areas = require("../src/models/DQ4/areas.js");
const armors = require("../src/models/DQ4/armors.js");
const characters = require("../src/models/DQ4/characters.js");
const continents = require("../src/models/DQ4/continents.js");
const game = require("../src/models/DQ4/game.js");
const helmets = require("../src/models/DQ4/helmets.js");
const items = require("../src/models/DQ4/items.js");
const monsters = require("../src/models/DQ4/monsters.js");
const shields = require("../src/models/DQ4/shields.js");
const skills = require("../src/models/DQ4/skills.js");
const weapons = require("../src/models/DQ4/weapons.js");

describe("Accessories Model", () => {
  it("... must be an array", () => {
    const expected = accessories.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Areas Model", () => {
  it("... must be an array", () => {
    const expected = areas.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Armors Model", () => {
  it("... must be an array", () => {
    const expected = armors.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Characters Model", () => {
  it("... must be an array", () => {
    const expected = characters.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Continents Model", () => {
  it("... must be an array", () => {
    const expected = continents.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Game Model", () => {
  const expected = game.find();
  it("... must be of type object", () => {
    expect(typeof expected).toBe("object");
  });
});
describe("Helmets Model", () => {
  it("... must be an array", () => {
    const expected = helmets.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Items Model", () => {
  it("... must be an array", () => {
    const expected = items.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Monsters Model", () => {
  it("... must be an array", () => {
    const expected = monsters.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Shields Model", () => {
  it("... must be an array", () => {
    const expected = shields.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Skills Model", () => {
  it("... must be an array", () => {
    const expected = skills.find();
    expect(typeof expected).toBe("array");
  });
});
describe("Weapons Model", () => {
  it("... must be an array", () => {
    const expected = weapons.find();
    expect(typeof expected).toBe("array");
  });
});