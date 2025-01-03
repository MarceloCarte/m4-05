import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

function Pizza() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas").then((res) =>
      res.json().then((data) => {
        setPizzas(data);
      })
    );
  }, []);
  return (
    <div className="grid grid-cols-3 p-14 gap-8 justify-center overflow-hidden flex-grow">
      {pizzas.map((pizza) => {
        return <CardPizza key={pizza.id} pizza={pizza} />;
      })}
    </div>
  );
}

export default Pizza;
