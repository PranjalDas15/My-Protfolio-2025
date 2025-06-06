"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import { setTheme } from "@/lib/redux/slices/themeSlice";
import React, { useEffect } from "react";

const ThemeManager = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    dispatch(setTheme(savedTheme));

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, [dispatch]);
  return <div>{children}</div>;
};

export default ThemeManager;
