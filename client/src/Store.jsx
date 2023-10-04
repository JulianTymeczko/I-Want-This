import { useContext } from "react";
import { CheckoutContext } from "./App";

export default function Store() {
  const { checkout } = useContext(CheckoutContext);
  return (
    <>
      {checkout.map((el) => (
        <div className="card" style={{ width: "18rem" }} key={el.id}>
          <img src="/src/assets/react.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{el.text}</p>
            <button type="button" className="btn btn-primary">
              {el.buttonText}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
