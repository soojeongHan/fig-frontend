const calRem = (size) => `${size / 16}rem`;

const color = {
  black: "#000",
  white: "#fff",
  blue: "#4d66ff",
  lightGrey: "#f1f1f1",
  yellow: "#ffa900",
  lightYellow: "#f0b030",
  grey: "grey",
};

const fontSize = {
  xxSmall: calRem(12),
  xSmall: calRem(14),
  small: calRem(16),
  medium: calRem(20),
  large: calRem(32),
  xLarge: calRem(48),
  xxLarge: calRem(64),
};

const fontWeight = {
  bolder: "bolder",
  base: "normal",
  lighter: "lighter",
};

const lineHeight = {
  xxSmall: calRem(12 * 1.25),
  xSmall: calRem(14 * 1.25),
  small: calRem(16 * 1.25),
  medium: calRem(20 * 1.25),
  large: calRem(32 * 1.25),
  xLarge: calRem(48 * 1.25),
  xxLarge: calRem(64 * 1.25),
};

const Theme = {
  color,
  fontSize,
  fontWeight,
  lineHeight,
};

export default Theme;
