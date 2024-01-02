import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  flex?: boolean;
  white?: boolean;
}
const Container = ({ children, flex = false, white = false }: Props) => {
  return (
    <div
      className={` md:w-largeDesktop w-myMobile mx-auto ${
        flex ? "flex md:flex-row flex-col" : "flex md:flex-col flex-row"
      } items-center gap-5 ${!white && "md:my-40 my-20"} ${
        white && "md:py-20 py-10"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
