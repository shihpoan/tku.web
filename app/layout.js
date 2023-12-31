"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";

import { RecoilRoot } from "recoil";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="页面描述" />
        <title>淡江大學河川保育創新服務學習課程</title>
      </head>
      <body>
        <div className="flex flex-col h-screen text-white justify-center items-center bg-primary_500 overflow-auto">
          <RecoilRoot>{children}</RecoilRoot>
        </div>
      </body>
    </html>
  );
}
