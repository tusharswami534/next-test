"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { DASHBOARD_BUTTON_LIST } from "@/utils/helper";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log(page);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  //   click button

  const [open, setOpen] = useState(0);

  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };

  return (
    <div className="flex min-h-screen w-full pl-[300px] relative">
      <div className="flex flex-col py-10 px-5 bg-black text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="mb-3 text-center text-4xl font-semibold">Dashboard</h1>
          {DASHBOARD_BUTTON_LIST.map((item, index) => (
            <Link
              href={`/dashboard?page=${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleButtonClick(index)}
              key={index}
              className={`${
                page === item.toLowerCase().replace(" ", "-") &&
                "bg-white text-black"
              } py-2 px-3 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-300 hover:text-black`}
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 py-2 px-3 rounded-lg text-white"
        >
          Logout
        </button>
      </div>
      <div className="w-full pt-20">
        <div className="bg-yellow-500 min-h-20 py-5 px-3 w-full fixed top-0">
          <h1 className="text-white font-semibold font-inter text-3xl">
            Welcome to Dashboard
          </h1>
        </div>
        {page === "button-1" ? (
          <p>First page</p>
        ) : page === "button-2" ? (
          <p>Second page</p>
        ) : page === "button-3" ? (
          <ImageUpload />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
