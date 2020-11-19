export const modifyResponsiveValue = (value, cb) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return cb(value);
  } else if (Array.isArray(value)) {
    return value.map(cb);
  } else {
    const newObj = {};
    Object.keys(value).forEach((k) => (newObj[k] = cb(value[k])));
    return newObj;
  }
};
