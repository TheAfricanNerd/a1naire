import React from "react";

interface ISlide {
  id: number;
  h2: React.ReactNode;
  p: string;
}

const data: Array<ISlide> = [
  {
    id: 1,
    h2:
      "The world's most ultra-luxurious vehicles, Ultra-Sophisticated Pilots and game changing experiences",
    p: "some Paragraph text",
  },
];
export default data;
