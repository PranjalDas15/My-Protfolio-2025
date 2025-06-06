import { useCursor } from "@/app/utils/customHooks/useCursor";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const Form = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <div className="w-full h-full p-10 flex flex-col items-center justify-center">
      <h1 className="text-[2rem] text-center">Send a message</h1>
      <form className="w-[90%] md:w-[60%] h-fit flex flex-col gap-5 items- justify-center py-10">
        <Input name={"name"} type={"text"} label={"Name"} />
        <Input name={"phone"} type={"tel"} label={"Phone"} />
        <Input name={"email"} type={"email"} label={"Email"} />
        <TextArea name={"message"} label={"Message"} />
        <button
          onMouseEnter={() => mouseEnterHandler("Send Message")}
          onMouseLeave={mouseLeaveHandler}
          className="relative w-[120px] h-[45px] border-2 group cursor-none"
        >
          <p className="relative text-[1.2rem] group-hover:text-amber-50 group-hover:dark:text-zinc-700 transition-all duration-300 z-10">
            Send
          </p>
          <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-zinc-700 dark:bg-amber-50 transition-all duration-300 z-0"></div>
        </button>
      </form>
    </div>
  );
};

export default Form;
