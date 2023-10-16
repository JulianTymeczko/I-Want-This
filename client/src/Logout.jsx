import Auth from "./utils/auth";
function Logout() {
  return (
    <>
      <form>
        <h1 className="h3 mb-3 fw-normal">Logout</h1>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="log-out"
          onClick={() => {
            Auth.logout();
          }}
        >
          Logout
        </button>
      </form>
    </>
  );
}
export default Logout;
