import { useCursor } from "@/app/utils/customHooks/useCursor";
import React, { useState } from "react";

const Input = ({ name, type, label }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const [input, setInput] = useState("");
  return (
    <div
      onMouseEnter={() => mouseEnterHandler(`Enter ${label}`)}
      onMouseLeave={mouseLeaveHandler}
      className="relative w-full h-[50px]"
    >
      <input
        type={type}
        id={name}
        name={name}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full h-full border-b-2 focus:outline-none text-[1.2rem] font-light tracking-wide peer cursor-none`}
      />
      <label
        htmlFor={name}
        className={`${
          input === ""
            ? "top-1/2 -translate-y-1/2 text-[1.2rem] opacity-70 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-[0.8rem] peer-focus:font-light peer-focus:opacity-100"
            : " top-0 -translate-y-2  text-[0.8rem] font-light opacity-100"
        } absolute left-0  font-light tracking-wide transition-all duration-300`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
