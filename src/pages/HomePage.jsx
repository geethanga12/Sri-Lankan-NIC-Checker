import React from "react";
import { useNavigate } from "react-router-dom";
import idcard from "../assets/idcardnew.png";

export default function HomePage() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/id-checker");
  }

  return (
    <div className="relative h-screen bg-white">
      <h1 className="text-center text-[50px] text-green-600 font-semibold absolute top-[100px] left-1/2 transform -translate-x-1/2">
        Check NIC details
      </h1>

      <div className="flex justify-center items-center h-full">
        <div onClick={handleClick} className="relative rounded-2xl group w-[400px]">
          <img className="rounded-2xl" src={idcard} alt="idcard" />

          <div className="absolute inset-0 bg-green-600 bg-opacity-60 rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
            <span className="text-white text-[14px] font-semibold">Click</span>
          </div>
        </div>
      </div>
    </div>
  );
}
