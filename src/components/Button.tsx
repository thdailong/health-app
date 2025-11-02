import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded font-medium transition-all duration-300 cursor-pointer border";

  const variantStyles = {
    primary:
      "bg-gradient-primary text-white border-transparent hover:opacity-90",
    secondary:
      "bg-secondary-300 text-dark-600 border-transparent hover:opacity-90",
    outline:
      "bg-transparent text-primary-400 border-primary-400 hover:bg-primary-400 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

