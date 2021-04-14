import React, { Component, useCallback } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../const";
import {
  changePassword,
  changePhoneActionCreator,
  login,
} from "../../actions/SignInActions";

import "./style.css";

const SignInPageContainer = () => {
  const dispatch = useDispatch();

  const phone = useSelector((state) => state.signIn.phone);
  const password = useSelector((state) => state.signIn.password);
  const user = useSelector((state) => state.signIn.user);
  const error = useSelector((state) => state.signIn.error);

  const onChangePhone = useCallback(
    (event) => {
      const action = changePhoneActionCreator(event.target.value);

      dispatch(action);
      // можно оптимизировать, убрав переменную action:
      // dispatch(changePhoneActionCreator(event.target.value))
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (event) => {
      // можно оптимизировать, убрав переменную action:
      // dispatch(changePhoneActionCreator(event.target.value))
      dispatch(changePassword(event.target.value));
    },
    [dispatch]
  );

  const onLogin = () => {
    dispatch(login(phone, password));
  };

  return (
    <div className="page">
      <div className="page-sign-in">
        <input
          type="text"
          placeholder="phone number"
          onChange={onChangePhone}
          value={phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={onChangePassword}
          value={password}
        />
        <div>
          {user && (
            <span>
              {user.name.first} {user.name.last}
            </span>
          )}
        </div>
        <span className="text-field error-text">{error}</span>
        <button onClick={onLogin}>Sign in</button>
      </div>
      {user && <Redirect to={ROUTES.MAIN} />}
    </div>
  );
};

export { SignInPageContainer };
