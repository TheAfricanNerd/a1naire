import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return (
    <span
      className={`
      ${className ? className + " my-2 text-center" : "text-center  my-5"}
       md:text-[32px] block w-myMobile mx-auto `}
    >
      {children}
    </span>
  );
};

export default Text;
