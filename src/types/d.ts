import { ReactNode } from "react";
import { IImage } from "../assets/images";

export interface SlidesProps {
  id?: string | number;
  h2?: string | ReactNode;
  p?: string | ReactNode;
  image?: IImage;
}
export interface PropData {
  title?: string | ReactNode;
  image?: IImage;
  images?: IImage[];
  subImage?: IImage;
  text?: string | ReactNode;
  slides?: SlidesProps[];
  slide1?: SlidesProps[];
  slide2?: SlidesProps[];
}
