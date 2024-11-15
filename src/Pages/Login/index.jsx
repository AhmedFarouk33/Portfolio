import { Link } from "react-router-dom";
import "./index.css";
export default function index() {
  return (
    <div className="parent d-flex flex-lg-row flex-md-column flex-sm-column">
      <div className="child-1 d-flex flex-column justify-content-center">
        <div className="grandChild d-flex flex-column justify-content-center">
          <h1 className="mx-5 my-3">Welcome back!</h1>
          <h4 className="mx-5">
            Get access to your Orders, Wishlist and Recommendations.
          </h4>
        </div>
      </div>
      <div className="child-2">
        <form className="">
          <h2 className="d-flex mt-5 justify-content-center align-items-center">
            Sign In
          </h2>
          <div className="mx-4 my-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control p-3"
              id="exampleInputEmail"
              placeholder="Enter Email"
            />
          </div>
          <div className="mx-4 my-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control p-3"
              id="exampleInputPassword"
              placeholder="Enter Password"
            />
          </div>
          <div className="rememperMe mx-lg-5 form-check d-flex flex-row gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Rememper Me
            </label>
            <p className="ms-auto">
              <Link className="registerBtn" to="Register">
                Forget Password
              </Link>
            </p>
          </div>
          <div className="SignInButtonDiv">
            <button className="SignInButton mx-4 my-5">Sign in</button>
          </div>
        </form>
        <div>
          <p className="d-flex justify-content-center mb-4 gap-2">
            Don't have an account?
            <Link className="registerBtn" to="Register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
