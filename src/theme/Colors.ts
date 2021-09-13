import { useColorScheme } from "react-native";

const Colors = {
  primary_light: "#007F64",
  primary_dark: "rgba(3, 78, 63, 1)",

  background_light: '#FFF',
  background_dark: '#000',

  title_light: '#000',
  title_dark: '#FFF',

  subtitle_light: '#F3F3F3',
  subtitle_dark: '#222',

  content_light: '#DAE1E7',
  content_dark: '#444',
};

const useColorsBySchemeMany = (colorsSelecteds = []) => {
  const scheme = useColorScheme();
  const colors = {};
  for (const selectedColor of colorsSelecteds) {
    let color = null;
    const color_name = `${selectedColor}_${scheme}`;
    if (Colors[color_name]) {
      color = Colors[color_name];
    }
    else if (Colors[selectedColor]) {
      color = Colors[selectedColor];
    }
    colors[selectedColor] = color;
  }
  return colors;
}

const useColorByScheme = (color) => {
  if (Array.isArray(color)) {
    return useColorsBySchemeMany(color)
  }
  else if (!color) {
    return null;
  }
  const scheme = useColorScheme();
  const color_name = `${color}_${scheme}`;
  if (Colors[color_name]) return Colors[color_name];
  else if (Colors[color]) return Colors[color];
  return null;
}

export default Colors;

export { Colors, useColorByScheme, useColorsBySchemeMany };
