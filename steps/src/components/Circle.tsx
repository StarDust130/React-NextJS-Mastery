interface CircleProps {
  value: number;
  isActive: boolean;
  key: number;
}

const Circle = ({ value, isActive, key }: CircleProps) => {
  return (
    <div
      className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white ${
        isActive ? "bg-blue-500" : "bg-blue-300"
      }`}
        key={key}
    >
      {value}
    </div>
  );
};

export default Circle;
