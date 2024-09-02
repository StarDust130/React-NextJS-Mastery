interface ButtonProps {
  value: string;
}

const Button = ({ value }: ButtonProps) => {
  return (
    <button className="bg-blue-500 px-2 py-1 rounded-3xl text-white text-sm font-bold">
      {value}
    </button>
  );
};
export default Button;
