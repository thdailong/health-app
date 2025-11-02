import { ReactNode } from "react";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

const GridLayout = ({ children, className = "" }: GridLayoutProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
