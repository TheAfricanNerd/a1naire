import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  loose?: boolean;
}

const Title = ({ children }: Props) => {
  return (
    <div className="w-full my-10">
      <h1 className=" md:text-7xl text-4xl md:w-3/3 w-myMobile text-center mx-auto">
        {children}
      </h1>
    </div>
  );
};

export default Title;
