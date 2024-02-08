import {colors, ColorTheme} from 'src/theme';

// Utility function to get the active color theme
export const getActiveColors = (theme: ColorTheme | null | undefined) => {
  return theme ? colors[theme] : colors.light;
};
