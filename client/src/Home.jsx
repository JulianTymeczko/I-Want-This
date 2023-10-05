import { useContext } from "react";
import { items } from "./items";
import {
  CheckoutContext,
  ChocolateContext,
  FilterContext,
  StrawberryContext,
  VanillaContext,
} from "./App";
// import { useQuery } from "@apollo/client";
export default function Home() {
  // const { data } = useQuery(YOUR_GRAPHQL_QUERY);
  const { setCheckout, checkout } = useContext(CheckoutContext);
  const { filter } = useContext(FilterContext);
  const { vanilla } = useContext(VanillaContext);
  const { strawberry } = useContext(StrawberryContext);
  const { chocolate } = useContext(ChocolateContext);
  return (
    <>
      <main className="home-main">
        {items
          .filter((item) => {
            if (filter == "") {
              return true;
            } else if (filter != "") {
              return item.text.includes(filter);
            }
          })
          .filter((item) => {
            if (!vanilla) {
              return true;
            } else if (vanilla) {
              return item.category == "Vanilla";
            }
          })
          .filter((item) => {
            if (!strawberry) {
              return true;
            } else if (strawberry) {
              return item.category == "Strawberry";
            }
          })
          .filter((item) => {
            if (!chocolate) {
              return true;
            } else if (chocolate) {
              return item.category == "Chocolate";
            }
          })
          .map((item) => (
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
                  {item.category}
                </button>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}
