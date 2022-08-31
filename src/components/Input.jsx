import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
const Input = () => {
  return (
    <div className=" flex flex-row justify-between my-6">
      <div className=" flex flex-row w-3/4 justify-center items-center space-x-4">
        <input
          type="text"
          className=" text-xl font-light p-2 shadow-xl w-full capitalize focus:outline-none first-letter:capitalize placeholder:lowercase "
          placeholder="Search for city...."
        />
        <UilSearch
          size="30"
          color="#fff"
          className=" cursor-pointer transition ease-out  hover:scale-125"
        />
        <UilLocationPoint
          size="30"
          color="#fff"
          className=" cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className=" text-white font-light text-xl">
          °C
        </button>
        <p className=" text-white font-light text-xl">|</p>
        <button name="imprial" className=" text-white font-light text-xl">
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
