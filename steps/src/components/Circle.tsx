
interface CircleProps {
    value: string;
    }

const Circle = ({ value }: CircleProps) => {
  return (
    <div className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-white bg-blue-500">
      {value}
    </div>
  );
};

export default Circle;
