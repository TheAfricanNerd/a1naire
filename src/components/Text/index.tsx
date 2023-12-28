import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Text = ({ children }: Props) => {
  return <p className="md:text-[32px] text-center my-10">{children}</p>;
};

export default Text;
