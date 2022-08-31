import React from "react";

const TopButtons = () => {
  const cities = [
    { id: 1, title: "Amman" },
    { id: 2, title: "AlQuds" },
    { id: 3, title: "doha" },
    { id: 4, title: "Cairo" },
    { id: 5, title: "Tunisia" },
  ];
  return (
    <div className="flex items-center justify-around my-4">
      {cities.map((city) => (
        <button key={city.id}  className=" text-white text-lg font-medium  ">{city.title}</button>
      ))}
    </div>
  );
};

export default TopButtons;
