interface FooterProps {
  totalItems: number;
  packedCount: number;
  packedPercentage: number;
}

const Footer = ({ totalItems, packedCount, packedPercentage }: FooterProps) => {
  return (
    <div className="flex justify-center items-center h-14 w-screen bg-sky-500">
      <h1 className="text-sm font-semibold font-mono">
        💼 You have {totalItems} items on your list, and you already packed{" "}
        {packedCount} ({packedPercentage}%)
      </h1>
    </div>
  );
};

export default Footer;
