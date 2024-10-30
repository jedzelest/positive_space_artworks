import "./Button.css";

interface Props {
  context: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon?: string;
}

const Button = ({ context, onClick, type, disabled, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="button-style"
    >
      {context}
      {icon && <img src={icon} alt="Button-icon" />}
    </button>
  );
};

export default Button;
