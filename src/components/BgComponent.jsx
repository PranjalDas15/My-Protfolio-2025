import React from "react";

const BgComponent = () => {
  return (
    <div className="fixed top-0 w-full h-full">
      <div className="relative w-full h-full grid grid-cols-8 grid-rows-12 lg:grid-cols-12 lg:grid-rows-8 overflow-hidden opacity-20 dark:opacity-15 z-0">
        {Array.from({ length: 96 }).map((_, index) => (
          <div key={index} className="border-r border-b"></div>
        ))}
      </div>
      <div className="absolute top-0 bg-radial from-transparent to-85% to-amber-50 dark:to-zinc-900 w-full h-full z-20"/>
    </div>
  );
};

export default BgComponent;
