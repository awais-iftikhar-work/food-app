import { styled } from "@/theme";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    content: {
      start: {
        alignContent: "start",
      },
      center: {
        alignContent: "center",
      },
      end: {
        alignContent: "end",
      },
      stretch: {
        alignContent: "stretch",
      },
      between: {
        alignContent: "space-between",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      6: {
        gap: "$6",
      },
      9: {
        gap: "$9",
      },
      10: {
        gap: "$10",
      },
      12: {
        gap: "$12",
      },
      13: {
        gap: "$13",
      },
      15: {
        gap: "$15",
      },
      20: {
        gap: "$20",
      },
      24: {
        gap: "$24",
      },
      27: {
        gap: "$27",
      },
      32: {
        gap: "$32",
      },
      34: {
        gap: "$34",
      },
      36: {
        gap: "$36",
      },
      40: {
        gap: "$40",
      },
      44: {
        gap: "$44",
      },
      50: {
        gap: "$50",
      },
      100: {
        gap: "$100",
      },
    },
    gapX: {
      1: {
        columnGap: "$1",
      },
      2: {
        columnGap: "$2",
      },
      3: {
        columnGap: "$3",
      },
      7: {
        gap: "$7",
      },
      9: {
        columnGap: "$9",
      },
      21: {
        columnGap: "$21",
      },
      38: {
        columnGap: "$38",
      },
      48: {
        columnGap: "$48",
      },
      99: {
        columnGap: "$99",
      },
    },
    gapY: {
      1: {
        rowGap: "$1",
      },
      2: {
        rowGap: "$2",
      },
      3: {
        rowGap: "$3",
      },
      4: {
        rowGap: "$4",
      },
      6: {
        rowGap: "$6",
      },
      24: {
        rowGap: "$24",
      },
    },
    flex: {
      1: {
        flex: 1,
      },
      2: {
        flex: 2,
      },
      3: {
        flex: 3,
      },
      4: {
        flex: 4,
      },
      5: {
        flex: 5,
      },
      6: {
        flex: 6,
      },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});
