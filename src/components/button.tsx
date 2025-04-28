interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, disabled, children, className }: Props) => {
  return (
    <button
      className={`px-3 py-1 rounded bg-primary text-white ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : " hover:bg-primary-hover cursor-pointer transition-colors"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
