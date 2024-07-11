import "./styles.css"

interface ButtonProps {
    disabled?: boolean;
    label: string;
    onClick: () => void;
}

const Button = ({
  label,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
      <button
        className="button"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
  );
};

export default Button;
