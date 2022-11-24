/**
 * Selects all weapons from the table and generates an object out of it
 * Meant to be used on http://dq4ds.ffsky.cn/weapon.htm
 * Example of usage :
 * JSON.stringify(getAllWeapons())
 * @param {string} tableSelector
 * @param {integer} offset The offset to change the beginning of the table
 * @returns {Array<object/>}
 */
const getAllWeapons = (tableSelector = "#weapons", offset = 2) => {
  const weapons = Array.from(
    document.querySelector(tableSelector).querySelectorAll("tr")
  );
  for (let i = 0; i < offset; i++) {
    weapons.shift();
  }

  return weapons.map((weapon) => {
    const name = weapon
      .querySelector(".th1")
      .textContent.trim()
      .split("\n")[0]
      .trim();
    const attack = parseInt(
      weapon.querySelector("td:nth-child(3)").textContent
    );
    let price = weapon.querySelector("td:nth-child(4)").textContent.split(" ");
    price = price.map((p) => p.replace("*", ""));

    let priceSystem = {
      buy: price.filter((p) => !p.startsWith("/") && p.endsWith("G"))[0],
      sell: price.filter((p) => p.startsWith("/") && p.endsWith("G"))[0],
      token: price.filter((p) => !p.startsWith("/") && p.endsWith("C"))[0],
      minimedal: price.filter((p) => !p.startsWith("/") && p.endsWith("M"))[0],
    };

    const formatPrice = (price) =>
      parseInt(
        price
          .replace("G", "")
          .replace("/", "")
          .replace("C", "")
          .replace("M", "")
      );

    return {
      sprite: "weapons_sprites/?.png",
      artwork: "weapons_artworks/?.png",
      name: {
        en: "?",
        es: "?",
        fr: "?",
        jp: name,
      },
      stats: {
        attack,
      },
      price: {
        buy: priceSystem.buy ? formatPrice(priceSystem.buy) : "-",
        sell: priceSystem.sell
          ? formatPrice(priceSystem.sell)
          : priceSystem.buy
          ? parseInt((formatPrice(priceSystem.buy) / 4) * 3)
          : "-",
        token: priceSystem.token ? formatPrice(priceSystem.token) : "-",
        minimedal: priceSystem.minimedal
          ? formatPrice(priceSystem.minimedal)
          : "-",
      },
      zone: [],
      buyable_at: [],
      description: {
        en: "?",
        es: "?",
        fr: "?",
        jp: "?",
      },
      slug: "_slug"
    };
  });
};
