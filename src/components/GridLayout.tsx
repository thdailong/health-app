import { ReactNode } from "react";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

const GridLayout = ({ children, className = "" }: GridLayoutProps) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridLayout;

