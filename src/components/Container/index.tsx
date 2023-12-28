import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  flex?: boolean;
}
const Container = ({ children, flex = false }: Props) => {
  return (
    <div
      className={` md:w-largeDesktop w-myMobile mx-auto ${
        flex ? "flex md:flex-row flex-col" : "flex md:flex-col flex-row"
      } items-center gap-5 md:my-40 my-20`}
    >
      {children}
    </div>
  );
};

export default Container;
