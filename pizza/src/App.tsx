import './App.css'
import Pizza from './components/Pizza';
import {pizzaData} from './data'

function App() {

  

  return (
    <>
      {pizzaData.map((pizza) => (
        <Pizza
          name={pizza.name}
          description={pizza.ingredients}
          img={pizza.photoName}
          price={pizza.price}
          sold={pizza.d}
        />
      ))}
    </>
  );
}

export default App
