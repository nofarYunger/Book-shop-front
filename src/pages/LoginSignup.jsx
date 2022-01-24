import React, { useEffect, useState } from "react";
import { useForm } from "../services/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/userAction";
import { useHistory } from "react-router";

function LoginSignup() {
  let history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [msg, setMsg] = useState("");

  const stateUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actions, dispatch);

  const [userCreds, handleFormChange, setUserCreds] = useForm({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isLogin) {
      setUserCreds({
        email: "",
        password: "",
      });
    } else {
      setUserCreds({
        fullname: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
    }
    setMsg("");
  }, [isLogin]);

  const checkSignupCreds = () => {
    const { password, confirmPassword, email } = userCreds;
    const emailformat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    // if (!email.match(emailformat)) {
    //   setMsg("Please enter a valid email address");
    // return false;
    if (password !== confirmPassword) {
      setMsg("Passwords dont match,please try again");
      return false;
    } else return true;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const { email, password } = userCreds;
    if (email && password) {
      try {
        await setUser(userCreds, isLogin);

        if (stateUser) history.push("/books");
      } catch (error) {
        setMsg("fullname or Password are incorrect please try again");
      }
    } else setMsg("fullname or Password are incorrect please try again");
  };

  return (
    <div className="signup-form app-layout grid-center">
      <div className="container flex">
        <div className="login-img"></div>

        <form action="" className="form">
          <h1 className="title">
            {" "}
            {isLogin ? "Log" : "Sign"}
            <span>{isLogin ? "In" : "Up"}.</span>
          </h1>

          <div className="form-msg">{msg}</div>
          <div className="input-container">
            <input
              type="email"
              className="input"
              onChange={handleFormChange}
              placeholder="a"
              name="email"
              value={userCreds.email}
            />
            <label className="label">Email</label>
          </div>
          {!isLogin && (
            <div className="input-container">
              <input
                type="text"
                className="input"
                onChange={handleFormChange}
                name="fullname"
                value={userCreds.fullname}
                placeholder="a"
              />
              <label className="label">Full Name</label>
            </div>
          )}
          <div className="input-container">
            <input
              type="password"
              className="input"
              onChange={handleFormChange}
              placeholder="a"
              name="password"
              value={userCreds.password}
            />
            <label className="label">Password</label>
          </div>
          {!isLogin && (
            <div className="input-container">
              <input
                type="password"
                className="input"
                onChange={handleFormChange}
                placeholder="a"
                name="confirmPassword"
                value={userCreds.confirmPassword}
              />
              <label className="label">Confirm Password</label>
            </div>
          )}

          <button onClick={onSubmit} className="main-btn">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <a
            className="change-frm-btn"
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {isLogin
              ? "Dont have an account? create one right now"
              : "Already have an account ? sign in now"}
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
