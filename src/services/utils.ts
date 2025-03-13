export const formatNumber = (num: number) => {
  const numStrArrReversed = num.toString().split('').reverse();
  let numStrArrReversedSpaces = [];
  for (let i = 0; i < numStrArrReversed.length; i++) {
    if (i !== 0 && i % 3 === 0) numStrArrReversedSpaces.push(' ');
    numStrArrReversedSpaces.push(numStrArrReversed[i]);
  }
  return numStrArrReversedSpaces.reverse().join('');
}

export const capitalization = (str: string, delimiter: string) => {
  const strArr = str.split(delimiter);
  const capitalizedStrArr = strArr.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedStrArr.join(' ');
}