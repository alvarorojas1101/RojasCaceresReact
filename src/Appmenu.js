import "./App.css";
import { Productos } from "./components/Products/products";


export default function Appmenu() {

  return (
    <div className="App">
      <h1>Menú</h1>
     
      {(( idx) => {
        return (
          <div key={idx}>
          <Productos/>
          </div>
        );
      })}
    </div>
  );
}

