import React from "react";

const Login = () => {
  return (
    <div className="flex">
      <div className="basis-[30%]">
        <div>
          <h2>
            blofgj
          </h2>
          <div><p>Welcome to our App</p> <a>Register</a></div>
        </div>

        <form>
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
        <img></img>
      </div>
    </div>
  );
};

export default Login;
