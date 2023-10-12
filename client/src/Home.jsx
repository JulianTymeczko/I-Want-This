import { useContext } from "react";

import {
  CheckoutContext,
  ChocolateContext,
  DefaultContext,
  FilterContext,
  StrawberryContext,
  VanillaContext,
} from "./App";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "./utils/queries";
export default function Home() {
  const { data } = useQuery(QUERY_PRODUCTS);
  const { setCheckout, checkout } = useContext(CheckoutContext);
  const { filter } = useContext(FilterContext);
  const { vanilla } = useContext(VanillaContext);
  const { strawberry } = useContext(StrawberryContext);
  const { chocolate } = useContext(ChocolateContext);

  const addToCart = (item) => {
    const itemInCart = checkout.find((cartItem) => cartItem._id === item._id);

    if (itemInCart) {
      return;
    } else {
      setCheckout([
        ...checkout,
        {
          _id: item._id,
          name: item.name,
          flavour: item.flavour,
          description: item.description,
          price: item.price,
        },
      ]);
    }
  };
  console.log(data);
  return (
    <>
      {data ? (
        <>
          <main className="home-main">
            {data?.products
              .filter?.((item) => {
                if (filter == "") {
                  return true;
                } else if (filter != "") {
                  return item.name.includes(filter);
                }
              })
              .filter?.((item) => {
                if (!vanilla) {
                  return true;
                } else if (vanilla) {
                  return item.flavour == "Vanilla";
                }
              })
              .filter?.((item) => {
                if (!strawberry) {
                  return true;
                } else if (strawberry) {
                  return item.flavour == "Strawberry";
                }
              })
              .filter?.((item) => {
                if (!chocolate) {
                  return true;
                } else if (chocolate) {
                  return item.flavour == "Chocolate";
                }
              })
              .map?.((item) => (
                <div className="card" style={{ width: "18rem" }} key={item._id}>
                  <img
                    src="/src/assets/react.svg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`${item.name}     ${item.price}`}</h5>
                    <p className="card-text">{item.description}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      {item.flavour}
                    </button>
                  </div>
                </div>
              ))}
          </main>
        </>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}
