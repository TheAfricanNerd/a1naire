
import { Variants } from "framer-motion";
import { USDRATE } from "./constants";

// truncate text
export const TRUNCATER = (payload:string|number, limit:number) => {
  // Thow error is anything other that a string is provided. Ya'll should have just let me use typescript 😭
  if(typeof payload !== "string") throw new Error(`${payload} is not a valid input, please provide a valid string`);

  if(payload.length <= limit) return payload;

  return `${payload.split('0', limit)}...`;
}

// format currency
export const FORMAT_CURRENCY = (payload:number | string) => {
  if(!Number(payload)) throw new Error(`${payload} is not a valid input, please provide a valid string or number`);
  return (`₦ ${payload.toLocaleString()}`)
}

// Get dollar equiv of a price
export const GET_DOLLAR_EQUIV = (payload:number | string) => {
  if(!Number(payload)) throw new Error(`${payload} is not a valid input, please provide a valid string or number`);
  return (` $${((Number(payload)/USDRATE).toFixed(2)).toLocaleString()}`)
}

interface AnimationType {
  yEnd?:number;
  yStart?: number;
  ease?: string | number;
  duration?: string | number;
}
export const CHILD_ANIMATION = (props:More = {}) => {

  return {
    hidden: { y: props.yStart ?? 200, opacity: 0 },
    visible: {
      y: props.yEnd ?? 0,
      opacity: 1,
      transition: {
        type: "Inertia",
        ease: props.ease ?? "anticipate",
        duration: props.duration ?? 1.5,
      },
    }
  }
}

interface More extends AnimationType {
  type?: string;
  delayChild?: number | undefined;
  staggerChild?: number | undefined;
}

export const PARENT_ANIMATION = (props:More = {}):Variants => {

  return {
    hidden: { opacity: 0, scale: 1, y: props.yStart ?? 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: props.yEnd ?? 0,
      transition: {
        type: props.type ?? "Inertia",
        ease: props.ease ?? "anticipate",
        duration: props.duration ?? 2,
        delayChildren: props.delayChild ?? 0.1,
        staggerChildren: props.staggerChild ?? 0.05,
      },
      
    }
  }
}

