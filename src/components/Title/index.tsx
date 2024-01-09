import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  loose?: boolean;
  right?: boolean;
  className?: string;
  innerClass?: string;
}

const Title = ({ children, right = false, className, innerClass }: Props) => {
  return (
    <div className={` ${className} my-2 md:my-5`}>
      <h1
        className={`
        ${
          innerClass && innerClass
        } md:text-7xl text-3xl w-myMobile md:w-largeDesktop mx-auto text-center font-semibold ${
          right ? "text-left" : "text-center"
        }`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
