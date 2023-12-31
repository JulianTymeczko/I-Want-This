import { useContext, useState } from "react";
import { CheckoutContext, DefaultContext } from "./App";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "./utils/queries";
import { useEffect } from "react";
// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe(
  "pk_test_51O1Z0XGgy3D9mUwWFfyp4AQ85SCFyHNs7Y693aKrtHKKVFsqHMBxzv8HSYyzJNB5xplDl09Pi3APA1xz2qMl2go900wFcG2PmDj",
);
function Store() {
  const { checkout, setCheckout } = useContext(CheckoutContext);
  const { defaultValue } = useContext(DefaultContext);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const removeObject = (IdToRemove) => {
    const updatedCheckout = checkout.filter((item) => item._id !== IdToRemove);
    setCheckout(updatedCheckout);
  };

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  function calculateTotal() {
    let sum = 0;
    checkout.forEach((el) => {
      sum +=
        el.price * parseInt(document.getElementById(`form${el._id}`)?.value);
      console.log(parseInt(document.getElementById(`form${el._id}`)));
      console.log(el);
    });
    setTotal(sum.toFixed(2));
  }
  useEffect(() => {
    calculateTotal();
  });

  const [total, setTotal] = useState(0);
  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {
    const productIds = [];

    checkout.forEach((item) => {
      for (
        let i = 0;
        i < parseInt(document.getElementById(`form${item._id}`)?.value);
        i++
      ) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 id="store-Cart" className="fw-normal mb-7 text-black">
                  Shopping Cart
                </h3>
              </div>
              {checkout.map((el) => (
                <div className="card rounded-3 mb-4" key={el._id}>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    style={{ position: "absolute", right: "30px", top: "20px" }}
                    onClick={() => {
                      removeObject(el._id);
                    }}
                  ></button>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={el.image}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{el.name}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>
                          {el.flavour}
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          className="btn btn-link px-2"
                          onClick={() => {
                            document.getElementById(`form${el._id}`).stepDown();
                            calculateTotal();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                          </svg>
                        </button>

                        <input
                          id={`form${el._id}`}
                          min="1"
                          name={`quantity${el._id}`}
                          defaultValue="1"
                          type="number"
                          className="form-control form-control-sm"
                        />

                        <button
                          className="btn btn-link px-2"
                          onClick={() => {
                            document.getElementById(`form${el._id}`).stepUp();
                            calculateTotal();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{el.price}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card">
                <div className="card-body">
                  <div id="amount-total">{total}</div>
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                    onClick={submitCheckout}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Store;
