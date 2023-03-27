import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSave = () => {
    console.log(loginRef.current.value, passwordRef.current.value);
    if (
      loginRef.current.value === "obid" &&
      passwordRef.current.value === "12345"
    ) {
      localStorage.setItem("token", true);
      navigate("/addhouse");
    } else {
      localStorage.setItem("token", false);
      alert("Login yoki parol noto'g'ri");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <input ref={loginRef} type="text" placeholder="Login" />
      <br />
      <br />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <br />
      <br />
      <button onClick={onSave}>Submit</button>
      <br />
      <p>login: obid</p>
      <p>parol: 12345</p>
    </>
  );
};
