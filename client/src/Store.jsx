import { useContext } from "react";
import { CheckoutContext, DefaultContext } from "./App";

export default function Store() {
  const { checkout, setCheckout } = useContext(CheckoutContext);
  const { defaultValue } = useContext(DefaultContext);
  const removeObject = (IdToRemove) => {
    const updatedCheckout = checkout.filter((item) => item.id !== IdToRemove);
    setCheckout(updatedCheckout);
  };
  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {checkout.map((el) => (
                <div className="card rounded-3 mb-4" key={el.id}>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    style={{ position: "absolute", right: "30px", top: "20px" }}
                    onClick={() => {
                      removeObject(el.id);
                    }}
                  ></button>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{el.text}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>
                          {el.category}
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          className="btn btn-link px-2"
                          onClick={() =>
                            document.getElementById(`form${el.id}`).stepDown()
                          }
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
                          id={`form${el.id}`}
                          min="1"
                          name={`quantity${el.id}`}
                          defaultValue="1"
                          type="number"
                          className="form-control form-control-sm"
                        />

                        <button
                          className="btn btn-link px-2"
                          onClick={() =>
                            document.getElementById(`form${el.id}`).stepUp()
                          }
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
                        <h5 className="mb-0">$499.00</h5>
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
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
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
