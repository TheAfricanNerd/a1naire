import cargroup from "./png/car_group.png";
import phone from "./png/phone.png";
import pilot1 from "./jpg/pilot1.jpg";
import pilot2 from "./jpg/pilot2.jpg";
import rools_woman from "./jpg/woman_in_rolls.jpg";
import arive_rolls from "./png/arrive_rolls.png";
import leave_ferrari from "./png/leave_ferrari.png";
import openair1 from "./jpg/openair1.jpg";
import openair2 from "./jpg/openair2.jpg";
import openair3 from "./jpg/openair3.jpg";
import productivity1 from "./jpg/productivity1.jpg";
import productivity2 from "./jpg/productivity2.jpg";
import productivity3 from "./jpg/productivity3.jpg";

interface IImage {
  img: string;
  alt: string;
}

export const CAR_GROUP: IImage = { img: cargroup, alt: "group of luxry cars" };
export const PHONE: IImage = {
  img: phone,
  alt: "phone with screenshot of a1naire app",
};

export const PILOT1: IImage = {
  img: pilot1,
  alt: "a1naire luxry pilot on black suite",
};

export const PILOT2: IImage = {
  img: pilot2,
  alt: "a1naire luxry pilot on white suite",
};

export const ROLLS_WOMAN: IImage = {
  img: rools_woman,
  alt: "Lady in ultra luxry rolls royce",
};
export const ARIVE_MAY: IImage = {
  img: arive_rolls,
  alt: "gold rolls",
};
export const LEAVE_FERR: IImage = {
  img: leave_ferrari,
  alt: "red ferrari",
};
export const OPENAIR1: IImage = {
  img: openair1,
  alt: "red ferrari",
};
export const OPENAIR2: IImage = {
  img: openair2,
  alt: "red ferrari",
};
export const OPENAIR3: IImage = {
  img: openair3,
  alt: "red ferrari",
};
export const PROD1: IImage = {
  img: productivity1,
  alt: "red ferrari",
};
export const PROD2: IImage = {
  img: productivity2,
  alt: "red ferrari",
};
export const PROD3: IImage = {
  img: productivity3,
  alt: "red ferrari",
};
