import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  flex?: boolean;
  white?: boolean;
  my?: number[] | string[];
}
const Container = ({ children, flex = false, white = false, my }: Props) => {
  return (
    <div
      className={` md:w-largeDesktop w-myMobile mx-auto ${
        flex ? "flex md:flex-row flex-col" : "flex md:flex-col flex-row"
      } items-center gap-5 ${
        !white && `md:my-${my ? my[0] : 40} my-${my ? my[1] : 20} `
      } ${white && "md:py-20 py-10"}`}
    >
      {children}
    </div>
  );
};

export default Container;
