import { useContext } from "react";
import { items } from "./items";
import { CheckoutContext } from "./App";

export default function Home() {
  const { setCheckout, checkout } = useContext(CheckoutContext);
  return (
    <>
      <main className="home-main">
        {items.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src="/src/assets/react.svg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{item.text}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setCheckout([
                    ...checkout,
                    {
                      id: item.id,
                      text: item.text,
                      buttonText: item.buttonText,
                    },
                  ]);
                }}
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
