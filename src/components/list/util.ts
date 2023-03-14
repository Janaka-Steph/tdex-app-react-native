import { LETTERS } from './constants';

const BULLETS = ['\u2022', '\u25E6', '\u25AA'];

export const repeat = (str = '', n = 1) => {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};

export const reverse = (arr = []) => {
  return arr.reduce((acc, element) => {
    return [element, ...acc];
  }, []);
};

const NUMERALS = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
] as const;

export const romanNumeral = (num) => {
  let tmpNum = num;
  let result = '';
  NUMERALS.forEach(([key, value]) => {
    result += repeat(key, Math.floor(tmpNum / value));
    tmpNum = tmpNum % value;
  });

  return result;
};

const countToString = (count) => `${count}`;

export const countToLetter = (count) => {
  if (count > 0) {
    const letterIndex = count - 1;
    return `${repeat(
      LETTERS[letterIndex % LETTERS.length],
      Math.floor(letterIndex / LETTERS.length) + 1,
    )}`;
  } else {
    return countToString(count);
  }
};

const countToRomanNumeral = (count) => {
  return `${romanNumeral(count).toLowerCase()}`;
};

const converters = [countToString, countToLetter, countToRomanNumeral];

export const getOrderedSymbol = (count, depth = 0) => {
  const converter = converters[depth % converters.length];
  return `${converter(count)}.`;
};

export const getUnorderedSymbol = (depth = 0) => {
  return BULLETS[depth % BULLETS.length];
};

export const getStyleValue = (styles = {}, styleProp = '') => {
  if (Array.isArray(styles)) {
    const flattenedStyles = styles.flat(Infinity);
    const foundStyleObj = reverse(flattenedStyles).find((styleObj) => {
      return styleObj[styleProp];
    });
    return foundStyleObj ? foundStyleObj[styleProp] : undefined;
  } else {
    return styles[styleProp];
  }
};
