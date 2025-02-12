"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const form = {
    email: "",
    password: "",
    checkbox: false,
  };
  const [formData, setFormData] = useState(form);
  const [error, setError] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard/button-1");
    }
  }, [router]);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (formData.email.includes("@") && formData.password.length >= 6) {
      setFormData(form);
      setError(false);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard/button-1");
    }
  };

  return (
    <div className="p-[30px_27px_31px] max-sm:px-[35px] max-sm:py-[32px] max-w-[1597px] mx-auto  md:justify-center md:items-center min-h-screen flex">
      <div className="flex gap-[120px] w-full justify-center relative items-center ">
        <div className="flex flex-col max-w-[456px] w-full h-full md:justify-center lg:ml-auto">
          <Image
            src={"/assets/images/png/page-logo.png"}
            width={167}
            height={31.71}
            className="absolute top-[19px] left-[14%] max-2xl:left-[0%] max-lg:relative max-lg:pb-[130px] max-md:pb-24 max-sm:pb-[90px]"
            alt="page logo"
          />
          <h1 className="font-semibold text-3xl leading-[58.45px] text-dark tracking-[1.22px]">
            Welcome Back
          </h1>
          <p className="pl-[6px] text-gray text-sm leading-[30px] pb-[31px]">
            Welcome back! Please enter your details.
          </p>
          <form className="w-full ">
            <label
              htmlFor="email"
              className=" font-medium leading-5 text-black-light"
            >
              {error && formData.email.includes("@") === false ? (
                <p className="text-red-900 leading-[30px]">
                  Email is required & proper format
                </p>
              ) : (
                <p className="text-black-light leading-[30px]">Email</p>
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
              {error && formData.password.length < 6 ? (
                <p className="text-red-900 leading-[30px]">
                  password is required & must be 6 characters
                </p>
              ) : (
                <p className="text-black-light leading-[30px]">password</p>
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
            <span className="flex justify-between max-sm:flex-col gap-y-3.5 mt-[18px]">
              <span className="flex gap-3 items-center">
                <input
                  className="!size-5 !bg-white-light !rounded-md !border !border-solid !border-gray-light"
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
              onClick={handlerSubmit}
              className="w-full pt-[9px] bg-black-light border border-solid border-black-light hover:text-black-light hover:bg-white transition-all duration-300 pb-2.5 font-medium leading-6 text-sm text-white mt-6 rounded-[9px]"
            >
              Sign In
            </button>
            <button
              onClick={(e: any) => e.preventDefault()}
              className="w-full pt-[9px] gap-2.5 pb-2.5 font-medium leading-6 text-sm transition-all duration-300 text-black-light hover:bg-black-light hover:text-white flex mt-1.5 rounded-[9px] justify-center items-center border border-solid border-gray-light"
            >
              <Image
                src={"/assets/images/png/google-logo.png"}
                alt="google logo"
                width={22}
                height={22}
                className="pointer-events-none"
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
