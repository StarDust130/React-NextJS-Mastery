interface PizzaProps {
  name: string;
  description: string;
  img: string;
  price: number;
  soldOut: boolean;
}

const Pizza = (props: PizzaProps) => {
  const { name, description, img , price , soldOut } = props;
  return (
    <>
      <img src={img} alt="pizza" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{soldOut ? "Sold Out" : "Avaiable"}</p>
    </>
  );
};

export default Pizza;
