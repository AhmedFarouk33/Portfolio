import { Link } from "react-router-dom";
import "./index.css";

export default function index() {
  return (
<div className="parent d-flex flex-lg-row flex-md-column flex-sm-column">
  <div className="child-1">
    <div className="grandChild d-flex flex-column justify-content-center">
      <h1 className="mx-5 my-3">You are now here!</h1>
      <h4 className="mx-5">
        Sign up with your email and personal details to get started!
      </h4>
    </div>
  </div>
  <div className="child-2">
    <form className="">
      <h2 className="d-flex mt-5 justify-content-center align-items-center">
        Sign Up
      </h2>
      <div className="mx-4 my-1">
        <label htmlFor="exampleInputName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control p-3"
          id="exampleInputName"
          placeholder="Enter Name"
        />
      </div>
      <div className="mx-4 my-1">
        <label htmlFor="exampleInputphone" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control p-3"
          id="exampleInputphone"
          placeholder="Enter Phone"
        />
      </div>
      <div className="mx-4 my-1">
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
      <div className="mx-4 my-1">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control p-3"
          id="exampleInputPassword1"
          placeholder="Enter Password"
        />
      </div>
      <div className="mx-4 my-1">
        <label htmlFor="exampleInputPassword2" className="form-label">
          Re-Enter Password
        </label>
        <input
          type="password"
          className="form-control p-3"
          id="exampleInputPassword2"
          placeholder="Enter Password"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="SignInButton mt-3"
          style={{ width: "90%" }}
        >
          Sign Up
        </button>
      </div>
    </form>
    <div>
      <div className="d-flex mx-4 my-1 gap-3 justify-content-center">
      <p className="d-flex justify-content-center mb-4 gap-2">
        Already have an account?<Link to="" className="signinBtn">Sign In</Link>
      </p>
    </div>
  </div>
</div>
</div>

)}