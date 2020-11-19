import { _customSystem } from './system';

// Transform the custom alias to a format that styled-system CSS supports

const transformAlias = (prop, propValue) => {
  const configKeys = Object.keys(_customSystem);
  let result = {};

  if (configKeys.includes(prop)) {
    if (typeof _customSystem[prop] === 'boolean') {
      result[prop] = propValue;
    } else {
      const key: any = _customSystem[prop];
      const { properties, property } = key;
      if (properties) {
        properties.forEach((_cssProp) => (result[_cssProp] = propValue));
      }
      if (property) {
        result[property] = propValue;
      }
    }
  } else {
    result[prop] = propValue;
  }
  return result;
};

export const transformAliasProps = (props) => {
  let result = {};
  for (let prop in props) {
    if (typeof props[prop] === 'object') {
      result = { ...result, [prop]: transformAliasProps(props[prop]) };
    } else {
      result = { ...result, ...transformAlias(prop, props[prop]) };
    }
  }
  return result;
};
