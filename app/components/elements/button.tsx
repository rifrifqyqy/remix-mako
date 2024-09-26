import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  textstyle?: string;
  style?: string;
}

export default function RemixButton({ children, onClick, color, textstyle, style }: ButtonProps) {
  return (
    <button className={twMerge(`bg-slate-800 text-white px-4 py-2 rounded-md hover:opacity-85 transition-all`, color, textstyle, style)} onClick={onClick}>
      {children}
    </button>
  );
}
