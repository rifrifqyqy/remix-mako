import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  textstyle?: string;
  style?: string;
}

export default function RemixButton({
  children,
  onClick,
  color,
  textstyle,
  style,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `rounded-md bg-slate-800 px-4 py-2 text-white transition-all hover:opacity-85`,
        color,
        textstyle,
        style,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
