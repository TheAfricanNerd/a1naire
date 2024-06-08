import React from "react";

interface ISlide {
  id: number;
  h2: React.ReactNode;
  p: string;
}

const data: Array<ISlide> = [
  {
    id: 1,
    h2: "Works like Uber, but with the world's most ultra-luxurious vehicles and game changing features. Coming soon...",
    p: "some Paragraph text",
  },
  // {
  //   id: 2,
  //   h2: "Works like Uber, but with the world's most ultra-luxurious vehicles and game changing features",
  //   p: "some Paragraph text",
  // },
  // {
  //   id: 3,
  //   h2: "It will forever change how you move around Miami",
  //   p: "some Paragraph text",
  // },
  // {
  //   id: 4,
  //   h2: (
  //     <p>
  //       Coming <br /> Early 2024
  //     </p>
  //   ),
  //   p: "some Paragraph text",
  // },
];
export default data;
