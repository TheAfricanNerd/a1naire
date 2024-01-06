import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return (
    <span
      className={`${
        className ? className : "text-center"
      } md:text-[32px] my-5 block w-myMobile mx-auto `}
    >
      {children}
    </span>
  );
};

export default Text;
