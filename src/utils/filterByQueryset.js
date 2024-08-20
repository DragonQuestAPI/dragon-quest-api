/**
 * Filters data depending on a queryset
 * @param {array<object/>} data The data to filter
 * @param {object} queryset Properties used to filter the data
 * @returns {array<object/>} The filtered data
 */
const filterByQueryset = (data, queryset) => {
  if (!queryset) return data;
  Object.keys(queryset).forEach((q) => {
    data = data.filter((d) => {
      return d[q] == queryset[q];
    });
  });
  return data;
};

module.exports = filterByQueryset;
