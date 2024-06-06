"use client";

import NavBarComponent from "./components/navBar";
import HomeComponent from "./components/home";
import { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-[1600px] m-auto grid-duo ">
      <NavBarComponent />
      <HomeComponent />
    </div>
  );
}
