import type * as Stitches from "@stitches/react";

const commonSizes = {
  px: "1px",
  "0-5": "0.125rem",
  1: "0.25rem",
  "1-5": "0.375rem",
  2: "0.5rem",
  "2-5": "0.625rem",
  3: "0.75rem",
  "3-5": "0.875rem",
  4: "1rem",
  "4-5": "1.125rem",
  5: "1.25rem",
  6: "1.5rem",
  "6-7": "1.69rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  "9-10": "2.3125rem", //37px
  10: "2.5rem",
  12: "3rem",
  13: "3.125rem", //50px
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  25: "6.31rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  51: "3.1875rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const defaultTokens = {
  fonts: {
    poppins: "Poppins, sans-serif",
  },
  fontSizes: {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.375rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
  fontWeights: {
    extranormal: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    // extrabold: 800,
  },
  lineHeights: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    "9-10": "2.3125rem", //37px
    10: "2.5rem",
    11: "2.75rem", //44px
    12: "3rem",
    13: "3.125rem", //50px
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
    17: "4.6875rem",
    20: "5rem",
    24: "6rem",
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  space: {
    ...commonSizes,
  },
  sizes: {
    ...commonSizes,
    max: "max-content",
    min: "min-content",
    fit: "fit-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
    containerSm: "640px",
    containerMd: "768px",
    containerLg: "1024px",
    containerXl: "1280px",
  },
  breakpoints: {
    xs: "335px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
    "3xl": "1512px",
  },
  // breakpoints: {
  //   sm: "640px",
  //   md: "768px",
  //   lg: "1024px",
  //   xl: "1280px",
  //   xxl: "1536px",
  // },
  radii: {
    none: 0,
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xlg: "0.625rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "2xl-med": "1.25rem",
    "3xl": "1.5rem",
    "4xl": "1.875rem",
    "5xl": "2rem",
    "6xl": "2.25",
    "7xl": "2.5rem",
    round: "50%",
    full: "9999px",
  },
  letterSpacings: {},
  borderWidths: {},
  borderStyles: {},
  transitions: {},
  zIndices: {},
};

const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xxl: `(min-width: ${defaultTokens.breakpoints.xxl})`,
  "3xl": `(min-width: ${defaultTokens.breakpoints["3xl"]})`,
  motion: "(prefers-reduced-motion: reduce)",
  hover: "(any-hover: hover)",
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
};

const defaultColors = {
  white: "#ffffff",
  black: "#000000",
  footerBorder: "#5C8EDA",
};

const defaultUtils = {
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  bgColor: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),
  bgImage: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: value,
  }),
  bgClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
  bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

  dflex: (value: Stitches.PropertyValue<"alignItems">) => ({
    display: "flex",
    alignItems: value,
    justifyContent: value,
  }),
  fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),
  fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

  ai: (value: Stitches.PropertyValue<"alignItems">) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<"alignContent">) => ({
    alignContent: value,
  }),
  as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
  ji: (value: Stitches.PropertyValue<"justifyItems">) => ({
    justifyItems: value,
  }),
  jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
    justifyContent: value,
  }),

  w: (value: Stitches.PropertyValue<"width">) => ({ width: value }),
  h: (value: Stitches.PropertyValue<"height">) => ({ height: value }),
  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),
  minSize: (value: Stitches.PropertyValue<"minWidth">) => ({
    minWidth: value,
    minHeight: value,
  }),
  maxSize: (value: Stitches.PropertyValue<"maxWidth">) => ({
    maxWidth: value,
    maxWeight: value,
  }),
  ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
    borderTopLeftRadius: value,
  }),

  ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),
  tt: (value: Stitches.PropertyValue<"textTransform">) => ({
    textTransform: value,
  }),
  lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
    lineHeight: value,
  }),

  pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<"userSelect">) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  appearance: (value: Stitches.PropertyValue<"appearance">) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  textGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    "&::selection": {
      WebkitTextFillColor: "$colors$text",
    },
  }),
};

const commonTheme = {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {},
  },
  media: defaultMedia,
  utils: defaultUtils,
};

export default commonTheme;
