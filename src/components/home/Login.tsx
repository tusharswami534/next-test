"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Login = () => {
  return (
    <div className="p-[30px_27px_31px] justify-center items-center min-h-screen flex">
      <div className="flex gap-[120px] justify-center items-center ">
        <div className="flex flex-col max-w-[456px] w-full h-full relative justify-center lg:ml-auto">
          <Image
            src={"/assets/images/png/page-logo.png"}
            width={167}
            height={31.71}
            className="pointer-events-none"
            alt="page logo"
          />
          <h1 className="font-semibold text-3xl leading-[58.45px] text-dark tracking-[1.22px]">
            Welcome Back
          </h1>
          <p className="pl-[6px] text-gray text-sm leading-[30px]">
            Welcome back! Please enter your details.
          </p>
          <form className="w-full ">
            <label
              htmlFor="email"
              className=" font-medium leading-5 text-black-light"
            >
              Email
            </label>
            <input
              className="w-full p-[19px_14px] shadow-[0_1px_2px_0_#1018280D] mb-[18px] mt-1.5 placeholder:text-gray placeholder:text-sm placeholder:leading-6 border border-solid border-gray-light rounded-lg outline-none"
              placeholder="Email"
              type="email"
              id="email"
            />
            <label
              htmlFor="password"
              className=" font-medium leading-5 text-black-light"
            >
              Password
            </label>
            <input
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
                />
                <label
                  htmlFor="check"
                  className="font-inter leading-6 text-gray-dark"
                >
                  Remember for 30 days
                </label>
              </span>
              <Link
                href="/register"
                className="font-inter leading-6 text-blue-light"
              >
                Forgot Password
              </Link>
            </span>
            <button className="w-full pt-[9px] bg-black-light pb-2.5 font-medium leading-6 text-sm text-white mt-6 rounded-[9px]">
              Sing In
            </button>
            <button className="w-full pt-[9px] gap-2.5 pb-2.5 font-medium leading-6 text-sm text-black-light flex mt-1.5 rounded-[9px] justify-center items-center border border-solid border-gray-light">
              <Image
                src={"/assets/images/png/google-logo.png"}
                alt="google logo"
                width={22}
                height={22}
              />
              Sing in with Goolge
            </button>
            <span className="flex w-full justify-center gap-2.5 mt-[18px]">
              <p className="font-inter leading-6 text-gray-dark">Don’t have an account?</p>
              <Link href={"/"} className="text-blue-light font-inter">
                Sign up
              </Link>
            </span>
          </form>
        </div>
        <div className="max-w-[759px] max-lg:hidden w-full h-[899px] bg-blue rounded-[20px] flex justify-center items-center">
          <Image
            src={"/assets/images/png/layer-image.png"}
            className="pointer-events-none"
            width={617.58}
            height={541.41}
            alt="layer image"
          />
        </div>
      </div>
    </div>
  );
};
