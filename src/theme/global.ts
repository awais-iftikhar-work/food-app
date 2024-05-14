import { Rotate, contentShow } from "./animations";
import { globalCss } from "./stitches.config";


export const globalStyles = globalCss({
  html: {
    $$navbarHeight: "91px",
    boxSizing: "border-box",
  },
  "*, *::after, *::before": {
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "inherit",
  },
  body: {
    maxWidth:"100%",
    mx:"auto",
    overflow:"clip",
    padding: "0 8rem",
    backgroundColor: "white",
    color: "$bodyText",
    fontFamily: "$poppins",
    lineHeight: "$base",
    fontFeatureSettings: "kern",
    transitionProperty: "backgroundColor",
    transitionDuration: "$normal",
    fontDisplay: "swap",
  },
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit",
  },
  "b, strong": {
    fontWeight: "$bold",
  },
  small: {
    fontSize: "80%",
  },
  "img": {
    maxWidth: "100%",
    height: "auto",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  ".animate":{
    animation : `${Rotate} 0.3s ease`,
  },
  ".text-animate":{
    animation : `${contentShow} 0.3s ease`,
  }
  
});
