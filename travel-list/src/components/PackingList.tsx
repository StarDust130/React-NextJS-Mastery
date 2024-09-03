import Filters from "./Form";
import Item from "./Item";

interface PackingListProps {
  initialItems: { id: number; desc: string; qty: number; packed: boolean }[];
  handleDelete: (id: number) => void;

}

const PackingList = ({ initialItems, handleDelete }: PackingListProps) => {
  return (
    <>
      <div className="bg-amber-800  h-full w-full flex justify-evenly py-5">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </div>
      <Filters />
    </>
  );
};
export default PackingList;
