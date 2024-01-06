import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Text = ({ children }: Props) => {
  return (
    <span className="md:text-[32px] text-center my-5 block">{children}</span>
  );
};

export default Text;
