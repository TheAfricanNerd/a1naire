import React from "react";

interface ISlide {
  id: number;
  h2: React.ReactNode;
  p: string;
}

const data: Array<ISlide> = [
  {
    id: 1,
    h2: "Works like Uber, but with the world's most ultra-luxurious vehicles and game changing features. Scroll down to learn more",
    p: "some Paragraph text",
  },
];
export default data;
