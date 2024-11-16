import React, { LegacyRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  flex?: boolean;
  hardFlex?: boolean;
  white?: boolean;
  my?: number[] | string[];
  className?: string;
  ref?: LegacyRef<HTMLDivElement> | undefined;
}
const Container = ({
  children,
  flex = false,
  white = false,
  hardFlex = false,
  className,
  ref,
}: Props) => {
  return (
    <div
      ref={ref}
      className={`${className ? className : ""} 
      ${hardFlex ? "flex md:flex-row flex-row" : ""}
      md:w-largeDesktop w-full  mx-auto ${
        flex ? "flex md:flex-row flex-col" : ""
      } items-center gap-5 
      ${white ? "my-5 md:my-20" : "my-5 md:my-20"}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
