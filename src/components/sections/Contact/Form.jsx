import { useCursor } from "@/app/utils/customHooks/useCursor";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const Form = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <div className="w-full h-full xl:p-10 flex flex-col items-center justify-center">
      <h1 className="text-[1.5rem] xl:text-[2rem] text-center">Send a message</h1>
      <form className="w-[90%] md:w-[60%] h-fit flex flex-col gap-5 items-center justify-center py-5 xl:py-10">
        <Input name={"name"} type={"text"} label={"Name"} />
        <Input name={"phone"} type={"tel"} label={"Phone"} />
        <Input name={"email"} type={"email"} label={"Email"} />
        <TextArea name={"message"} label={"Message"} />
        <Button label={'Send'} hoverText={'Send Message'}/>
      </form>
    </div>
  );
};

export default Form;
