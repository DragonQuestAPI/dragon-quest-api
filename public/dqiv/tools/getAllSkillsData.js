/**
 * Selects all weapons from the table and generates an object out of it
 * Meant to be used on https://www.dragonquest-fan.com/dragonquest4/magies.php
 * Example of usage :
 * JSON.stringify(getAllSkills())
 * @param {string} tableSelector
 * @param {integer} offset The offset to change the beginning of the table
 * @returns {Array<object/>}
 */
const getAllSkills = (tableSelector = "table tbody", offset = 0) => {
  const allTr = Array.from(
    document.querySelector(tableSelector).querySelectorAll("tr")
  );
  for (let i = 0; i < offset; i++) {
    allTr.shift();
  }

  return allTr.map((tr, i) => {
    const name = tr.querySelector("td[data-title=Nom]").textContent.trim();
    const mp_cost = parseInt(tr.querySelector("td[data-title=MP]").textContent);
    const usable_in_battle =
      tr.querySelector("td[data-title=Combat]").textContent != "-";
    const usable_on_map =
      tr.querySelector("td[data-title=Extérieur]").textContent != "-";
    const description =
      tr.querySelector("td[data-title=Effet]").textContent.replace("Pv", "PV") +
      ".";

    return {
      id: i + 1,
      name: {
        en: "?",
        es: "??",
        fr: name,
        ge: "????",
        it: "?????",
        jp: "??????",
      },
      mp_cost: mp_cost,
      description: {
        en: "?",
        es: "??",
        fr: description,
        ge: "????",
        it: "?????",
        jp: "??????",
      },
      usable_in_battle: usable_in_battle,
      usable_on_map: usable_on_map,
      slug: "_slug",
    };
  });
};
