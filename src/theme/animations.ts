import { keyframes } from "./stitches.config";


const contentShow = keyframes({
  "0%": { opacity: 0, transform: "scale(.7)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});
const Rotate = keyframes({
  "0%": { opacity: 0, transform: "scale(.80) rotate(45deg)" },
  "100%": { opacity: 1, transform: "scale(1)  rotate(0deg)" },
});

export {
  Rotate,
  contentShow,
};
