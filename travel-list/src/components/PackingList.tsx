import Filters from "./Form";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const Items = () => {
  return (
    <>
      <div className="bg-amber-800  h-full w-full flex justify-evenly py-5">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <Filters />
    </>
  );
};
export default Items;
