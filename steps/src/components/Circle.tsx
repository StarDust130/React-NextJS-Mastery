interface CircleProps {
  value: number;
  key: number;
}

const Circle = ({ value, key }: CircleProps) => {
  return (
    <div
      className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-white bg-blue-500"
      key={key}
    >
      {value}
    </div>
  );
};

export default Circle;
