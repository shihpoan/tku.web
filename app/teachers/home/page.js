"use client";
import React from "react";
import { useRouter } from "next/navigation.js";

import { deleteCookie } from "cookies-next";

function page() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen gap-[5rem] justify-start py-8">
      <div className="text-4xl text-black font-bold">
        <p>河川生態保育教學</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <button
          className="w-[10rem] text-2xl text-gray-800 border-[2px] border-black bg-white rounded p-2"
          onClick={() => {
            router.push("/teachers/dashboard/rivers");
          }}
        >
          教學課程
        </button>
        <button
          className="w-[10rem] text-2xl text-gray-800 border-[2px] border-black bg-white rounded p-2"
          onClick={() => {
            router.push("/teachers/dashboard/reports");
          }}
        >
          學習紀錄
        </button>
        <button
          className="w-[10rem] text-2xl text-gray-800 border-[2px] border-black bg-white rounded p-2 mt-[10rem]"
          onClick={() => {
            deleteCookie("teacher_id");
            deleteCookie("teacher_name");
            router.push("/");
          }}
        >
          登出
        </button>
      </div>
    </div>
  );
}

export default page;
