/**
 * Formats a queryset by deleting unallowed properties
 * @param {object} queryset The queryset containing to properties to format
 * @param {array<string/>} allowedProperties An array containing the names of the allowed properties
 * @returns {object} The formatted queryset
 */
const formatQueryset = async (queryset, allowedProperties) => {
  const res = {};
  await Object.keys(queryset).forEach((property) => {
    if (allowedProperties.includes(property))
      res[property] = queryset[property];
  });
  return res;
};

module.exports = formatQueryset;
