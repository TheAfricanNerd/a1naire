interface IButton {
  label?: string;
  hancleClick?: () => void;
  children: React.ReactNode;
  icon?: string;
  color?: string;
  dark?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
}

const Button = ({ hancleClick, children, dark, isLarge }: IButton) => {
  return (
    <div
      className={`my-2 flex gap-2 px-12 py-3 w-full justify-center  border-slate-900 border-2  ${
        dark ? " bg-black text-white " : "text-black bg-white"
      } rounded-xl cursor-pointer
      ${isLarge ? " text-xl" : ""}
      `}
      onClick={hancleClick}
    >
      {children}
    </div>
  );
};

export const Outline = ({ hancleClick, children, dark, isSmall }: IButton) => {
  return (
    <div
      className={`my-2 flex gap-2 px-12 py-3 w-full justify-center items-center md:border-slate-900 border-white border-2 ${
        dark ? " bg-black text-white " : "text-black bg-white"
      } rounded-xl cursor-pointer
      ${isSmall ? " text-xs" : ""}
      `}
      onClick={hancleClick}
    >
      {children}
    </div>
  );
};

export default Button;
