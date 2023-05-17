import style from "./input.module.scss";
import { CgSearch } from "react-icons/cg";

interface InputProps {
  type: "text" | "email" | "password";
  value: string;
  required?: boolean;
  placeholder: string;
  setValue: (value: string) => void;
}

const Input = ({
  value,
  setValue,
  placeholder,
  type = "text",
  required = false,
}: InputProps) => {
  return (
    <div className={style.formGroup}>
      <input
        className={style.formGroup__input}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <CgSearch size={24} color="#4c45e"/>
    </div>
  );
};

export default Input;
