interface ButtonProps {
  value: string;
  onClick?: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 px-2 py-1 rounded-3xl text-white text-sm font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Button;
