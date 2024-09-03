
import Item from "./Item";

interface PackingListProps {
  items: { id: number; desc: string; qty: number; packed: boolean }[];
  handleDelete: (id: number) => void;
  handleTogglePacked: (id: number) => void;
}

const PackingList = ({
  items,
  handleDelete,
  handleTogglePacked,
}: PackingListProps) => {
  return (
    <>
      <div className="bg-amber-800 h-full w-full flex justify-evenly py-5">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleTogglePacked={handleTogglePacked}
          />
        ))}
      </div>
     
    </>
  );
};

export default PackingList;