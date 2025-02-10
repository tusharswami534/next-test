"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (
      formData.email !== "" &&
      formData.password.length >= 6 &&
      !passwordError
    ) {
      setFormData({
        email: "",
        password: "",
        checkbox: false,
      });
      setError(false);
      setPasswordError("");
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }
  };

  return (
    <div className="p-[30px_27px_31px] max-w-[1597px] mx-auto relative justify-center items-center min-h-screen flex">
      <div className="flex gap-[120px] w-full justify-center items-center ">
        <div className="flex flex-col max-w-[456px] w-full h-full relative justify-center lg:ml-auto">
          <Image
            src={"/assets/images/png/page-logo.png"}
            width={167}
            height={31.71}
            className="pointer-events-none absolute"
            alt="page logo"
          />
          <h1 className="font-semibold text-3xl leading-[58.45px] text-dark tracking-[1.22px]">
            Welcome Back
          </h1>
          <p className="pl-[6px] text-gray text-sm leading-[30px]">
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={handlerSubmit} className="w-full ">
            <label
              htmlFor="email"
              className=" font-medium leading-5 text-black-light"
            >
              {error ? (
                <p className="!text-red-900 text-sm font-bold leading-[30px]">
                  Enter Your Email
                </p>
              ) : (
                <p className="text-gray text-sm leading-[30px]">Email</p>
              )}
            </label>
            <input
              value={formData.email}
              onChange={(e: any) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-[19px_14px] shadow-[0_1px_2px_0_#1018280D] mb-[18px] mt-1.5 placeholder:text-gray placeholder:text-sm placeholder:leading-6 border border-solid border-gray-light rounded-lg outline-none"
              placeholder="Email"
              type="email"
              id="email"
            />
            <label
              htmlFor="password"
              className=" font-medium leading-5 text-black-light"
            >
              {error || passwordError ? (
                <p className="!text-red-900 font-bold text-sm leading-[30px]">
                  {passwordError || "Enter Your Password"}
                </p>
              ) : (
                <p className="text-gray text-sm leading-[30px]">Password</p>
              )}
            </label>
            <input
              value={formData.password}
              onChange={(e: any) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-[19px_14px] shadow-[0_1px_2px_0_#1018280D] mt-1.5 placeholder:text-gray placeholder:text-sm placeholder:leading-6 border border-solid border-gray-light rounded-lg outline-none"
              placeholder="••••••••"
              type="password"
              id="password"
            />
            <span className="flex justify-between mt-[18px]">
              <span className="flex gap-3 items-center">
                <input
                  className="!size-5 !bg-white !rounded-md !border !border-solid !border-gray-light"
                  type="checkbox"
                  id="check"
                  checked={formData.checkbox}
                  onChange={(e: any) =>
                    setFormData({ ...formData, checkbox: e.target.checked })
                  }
                />
                <label
                  htmlFor="check"
                  className="font-inter leading-6 text-gray-dark"
                >
                  Remember for 30 days
                </label>
              </span>
              <Link href="/" className="font-inter leading-6 text-blue-light">
                Forgot Password
              </Link>
            </span>
            <button
              type="submit"
              className="w-full pt-[9px] bg-black-light pb-2.5 font-medium leading-6 text-sm text-white mt-6 rounded-[9px]"
            >
              Sign In
            </button>
            <button className="w-full pt-[9px] gap-2.5 pb-2.5 font-medium leading-6 text-sm text-black-light flex mt-1.5 rounded-[9px] justify-center items-center border border-solid border-gray-light">
              <Image
                src={"/assets/images/png/google-logo.png"}
                alt="google logo"
                width={22}
                height={22}
              />
              Sign in with Google
            </button>
            <span className="flex w-full justify-center gap-2.5 mt-[18px]">
              <p className="font-inter leading-6 text-gray-dark">
                Don’t have an account?
              </p>
              <Link href={"/"} className="text-blue-light font-inter">
                Sign up
              </Link>
            </span>
          </form>
        </div>
        <div className="max-w-[759px] max-lg:hidden w-full h-[899px] bg-blue rounded-[20px] flex justify-center items-center">
          <Image
            src={"/assets/images/png/layer-image.png"}
            className="pointer-events-none max-2xl:w-10/12"
            width={617.58}
            height={541.41}
            alt="layer image"
          />
        </div>
      </div>
    </div>
  );
};
