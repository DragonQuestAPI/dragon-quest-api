const formatQueryset = async (queryset, allowedProperties) => {
  const res = {};
  await Object.keys(queryset).forEach((property) => {
    if (allowedProperties.includes(property))
      res[property] = queryset[property];
  });
  return res;
};

module.exports = formatQueryset;
