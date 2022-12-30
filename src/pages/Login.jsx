import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FC8D0B] bg-opacity-20 h-screen font-inter">
      <Admin_header />
      <div className="flex justify-center pt-10 ">
        <div className="p-10 bg-white rounded-md w-full max-w-[400px] ">
          <h1 className="text-center font-semibold text-xl">Log in</h1>

          {/* login form */}
          <form
            onSubmit={(e) => {
              // Preventing default refresh
              e.preventDefault();
              // Storing user credentials
              const userCredentials = {
                username: emailRef.current.value,
                password: passwordRef.current.value,
              };

              if (
                emailRef?.current?.value?.length > 0 &&
                passwordRef?.current?.value?.length > 0
              ) {
                axios({
                  method: "post",
                  url: VITE_BASE_LINK + "login",
                  data: userCredentials,
                })
                  .then(function (response) {
                    console.log("response of login", response?.data);
                    localStorage.setItem("username", response?.data?.username);
                    localStorage.setItem("token", response?.data?.token);
                    localStorage.setItem("user_id", response?.data?.id);
                    navigate("/admin");
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            }}
            className="pt-10"
          >
            <label htmlFor="email">Email address</label>
            <input
              ref={emailRef}
              name="email"
              type="text"
              className="border rounded-md p-2 w-full my-2 outline-[#FC8D0B]"
            />
            <label htmlFor="password">Password </label>
            <input
              ref={passwordRef}
              name="password"
              type="password"
              className="border rounded-md p-2 w-full my-2 outline-[#FC8D0B]"
            />
            {/* error */}
            <p className=" text-[#FF440D] invisible">Incorrect credentials</p>
            <button
              type="submit"
              className="rounded-md bg-[#FF440D] text-white w-full mt-3 p-2 transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
