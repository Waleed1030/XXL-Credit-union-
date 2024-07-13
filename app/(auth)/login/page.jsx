"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { MdKey, MdOutlineEmail } from "react-icons/md";
import { authenticate } from "@/app/lib/actions";
import "./login.scss";

const Login = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();
  //console.log("after login failed", state);

  return (
    <div className="login_container">
      <div className="modal">
        <span>Login</span>
        <p>Enter your login details.</p>

        <form action={formAction}>
          <div className="flex flex-col gap-2 w-full">
            <div className="input">
              <MdOutlineEmail />
              <input type="text" placeholder="ENTER USERNAME" name="username" />
            </div>
            <div className="input">
              <MdKey />
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                name="password"
              />
            </div>

            <div className="text-red-400 text-[12px]">{state && state}</div>
          </div>

          <div className="forgot_pw">
            <div>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="btn" aria-disabled={pending}>
            Login
          </button>
        </form>

        <div className="sign_up">
          <p>Don't have an account?</p>
          <a href="/signup">Sign Up</a>
        </div>

        <p>© Copyright 2024 Blue Phoenix Bank All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Login;
