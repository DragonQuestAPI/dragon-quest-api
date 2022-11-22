/**
 * Selects all weapons from the table and generates an object out of it
 * Meant to be used on http://dq4ds.ffsky.cn/weapon.htm
 * Example of usage :
 * JSON.stringify(getAllAccessories())
 * @param {string} tableSelector
 * @param {integer} offset The offset to change the beginning of the table
 * @returns {Array<object/>}
 */
const getAllAccessories = (tableSelector = "#accessories", offset = 2) => {
  const allTr = Array.from(
    document.querySelector(tableSelector).querySelectorAll("tr")
  );
  for (let i = 0; i < offset; i++) {
    allTr.shift();
  }

  return allTr.map((tr, i) => {
    const name = tr
      .querySelector(".th1")
      .textContent.trim()
      .split("\n")[0]
      .trim();
    // const defense = parseInt(tr.querySelector("td:nth-child(3)").textContent);
    let price = tr.querySelector("td:nth-child(4)").textContent.split(" ");
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
      id: i + 1,
      sprite: "helmets_sprites/?.png",
      name: {
        en: "?",
        es: "?",
        fr: "?",
        jp: name,
      },
      stats: {
        attack : "-",
        defense : "-",
        wisdom: "-",
        speed : "-",
        luck : "-",
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
      description: {
        en: "?",
        es: "?",
        fr: "?",
        jp: "?",
      },
    };
  });
};
