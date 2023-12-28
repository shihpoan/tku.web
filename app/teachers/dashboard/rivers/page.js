"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import { getCookie } from "cookies-next";

import { useNodePostApi } from "@/hooks/useNodeApi.js";

export default function Page() {
  const router = useRouter();

  const teacher_id = getCookie("teacher_id");

  const [riverList, setRiverList] = useState([]);

  useEffect(() => {
    async function findRivers() {
      try {
        const dbRivers = await useNodePostApi("/api/river/findRivers");
        const rivers = dbRivers.data.data;

        const riverTeacherIdReducer = rivers.reduce((acc, curr) => {
          const _teacher_id = curr.teacher_id;
          if (teacher_id == _teacher_id) acc.push(curr);

          return acc;
        }, []);

        setRiverList([...riverTeacherIdReducer]);
        console.log(rivers);
        if (dbRivers.statusText != "OK") {
          throw new Error("Failed to fetch data");
        }
      } catch (err) {
        console.log("err", err);
      }
    }
    findRivers();
  }, []);

  return (
    <main className="flex flex-col h-screen justify-between items-center py-8">
      <div className="flex flex-col text-4xl text-black font-bold gap-8">
        <p>河川生態保育場所</p>
        <div className="flex flex-col justify-center items-center gap-4">
          {riverList.map((river, rIdx) => (
            <button
              key={rIdx}
              className="w-[10rem] text-2xl text-gray-800 border-[2px] border-black bg-white rounded p-2"
              onClick={() =>
                router.push(
                  `/teachers/dashboard/editRiver/${river._id.toString()}`
                )
              }
            >
              {river.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-4xl text-gray-800 font-bold gap-8">
        <button
          className="text-4xl font-bold border-[2px] border-gray-800 bg-white rounded p-2"
          onClick={() => router.push("/teachers/dashboard/newRiver")}
        >
          建立環景課程
        </button>
      </div>
    </main>
  );
}
