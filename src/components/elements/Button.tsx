import { styled } from "@/theme/stitches.config";

export const Button = styled("button", {
  // position: relative;
  display: "inline-flex",
  gap: "$2",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  // borderRadius: "$md",
  borderRadius: "$xlg",
  appearance: "none",
  userSelect: "none",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  fontWeight: "$semibold",
  lineHeight: 1.2,
  color:"White",
  verticalAlign: "middle",
  cursor:"pointer",
  whiteSpace: "nowrap",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",
  transition: "background-color 0.3s linear",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  boxShadow: "0 8px 16px 0 rgba(244, 226, 209, 1), 0 6px 20px 0 rgba(244, 226, 209, 1)",
  "&:disabled": {
    boxShadow: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },

  // can be bundled with compound variants if needed
  "&:focus-visible": {
    boxShadow: "$outline",
  },

  variants: {
    weight: {
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      normal: {
        fontWeight: "$normal",
      },
      regular: {
        fontWeight: "$extranormal",
      },
    },
    size: {
      md: {
        fontSize: "14px",
        fontWeight:"bold",
        width: "fit-content",
        borderRadius:"50px",
        padding: "$4 $10",
        
      },
    },
    variant: {
      solid: {},

    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
