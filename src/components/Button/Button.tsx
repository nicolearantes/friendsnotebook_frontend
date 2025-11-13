interface ButtonProps {
  onClickFunction: () => void;
  text: string;
}

function Button({ onClickFunction, text }: ButtonProps) {
  return <button onClick={onClickFunction}>{text}</button>;
}

export default Button;
