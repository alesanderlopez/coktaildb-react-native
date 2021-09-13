import { Dimensions, useWindowDimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const useDimensions = () => useWindowDimensions();

const useDimensionsImage = (margins = 0, heightScale = 1) => {
  const width = windowWidth - (margins * 2);
  const height = width * heightScale;
  return { width, height };
}

export { useDimensionsImage, useDimensions, windowWidth, windowHeight };
