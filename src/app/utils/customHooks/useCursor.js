"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  setIsHover,
  setText,
} from "@/lib/redux/slices/mouseSlice";

export const useCursor = () => {
  const dispatch = useAppDispatch();
  const mouseEnterHandler = (text, img) => {
    dispatch(setIsHover(true));
    dispatch(setText(text));
  };

  const mouseLeaveHandler = () => {
    dispatch(setIsHover(false));
  };

  return { mouseEnterHandler, mouseLeaveHandler };
};
