import React from "react";
// import { img } from "../../public/assets/bg.png";

const Login = () => {
  return (
    <div className="flex container mx-auto py-9">
      <div className="basis-[30%]">
        <div>
          <h2>
            blofgj
          </h2>
          <div><p>Welcome to our App</p> <a>Register</a></div>
        </div>

        <form className="flex flex-col">
          <label>Email</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <input type="checkbox"></input>
          <button type="submit">Login</button>
          <button type="submit">Login With Brocess</button>

        </form>
      </div>
      <div className="flex-1">
        {/* <img src={img } /> */}
      </div>
    </div>
  );
};

export default Login;
