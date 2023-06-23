import { IButton } from "../types/Types";

const Button = ({ name, type, icon, onClick, label }: IButton) => {
  return (
    <button className="p-2 transition__all hover:bg-white/30 rounded-full" type={type} name={name} onClick={onClick} aria-label={label}>
      {icon}
    </button>
  );
};

export default Button;
