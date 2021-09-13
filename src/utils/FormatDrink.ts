export const getArrayPropsDrink = (drink: any, key: string) => {
  if (drink === null) {
    return null;
  }
  const elements: string[] = [];
  let ingredientIndex = 1;
  let keyIndex = `${key}${ingredientIndex}`;
  while (drink && drink[keyIndex]) {
    if (drink[keyIndex] !== null && drink[keyIndex] !== "") {
      let format = drink[keyIndex];
      format = format.trim();
      elements.push(format);
      ++ingredientIndex;
      keyIndex = `${key}${ingredientIndex}`;
    }
    else {
      break;
    }
  }
  return elements.join("\n");
}