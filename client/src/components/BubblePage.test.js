import React from "react";
import { render, screen, } from "@testing-library/react";
import BubblePage from "./BubblePage";


export const bogusBubbleData = [
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd"
      },
      id: 5
    },
    {
      color: "softpink",
      code: {
        hex: "#dd99ba"
      },
      id: 6
    },
    {
      color: "bisque",
      code: {
        hex: "#dd9a99"
      },
      id: 7
    },
    {
      color: "softyellow",
      code: {
        hex: "#dcdd99"
      },
      id: 8
  }
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const {queryAllByTestId, rerender} =render(<BubblePage error="" bubbles={[]}/>);
expect(queryAllByTestId("bubbles")).toStrictEqual([]);
expect(queryAllByTestid("bubbles")).toHaveLength(0);
rerender(<BubblePage error="" bubbles={bogusBubbleData}/>)
expect(queryAllByTestId("bubbles")).toHaveLength(6)
});

// test("Fetches data and renders the bubbles", () => {

// })
