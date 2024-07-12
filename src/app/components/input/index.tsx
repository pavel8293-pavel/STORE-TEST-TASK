import "./styles.css"

interface InputProps {
  value: string | number;
  type?: "text" | "number";
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  placeholder,
  onChange,
  type = "text"
}: InputProps) => {
  return (
    <input
      type={type}
      className="text-input"
      value={value.toString()}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
