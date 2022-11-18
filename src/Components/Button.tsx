/* eslint-disable max-len */
import React, { ReactNode, useEffect, useState } from "react";

import Loading from "../Lib/Icons/Loading";

export default function Button({
  loading,
  color,
  type,
  children,
  className,
  onClick,
  disabled,
}: {
  loading?: boolean;
  color?: "blue" | "red" | "purple" | "pink";
  type?: "submit" | "button";
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  const [buttonColor, setButtonColor] = useState("");

  useEffect(() => {
    if (color === "red") {
      setButtonColor(
        "bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white"
      );
    } else if (color === "purple") {
      setButtonColor(
        "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white"
      );
    } else if (color === "blue") {
      setButtonColor(
        "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white"
      );
    } else if (color === "pink") {
      setButtonColor(
        "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white"
      );
    }
  }, [color]);

  return (
    <button
      type={type || "button"}
      disabled={loading || disabled}
      onClick={onClick}
      className={`py-2 px-4 flex justify-center items-center transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg
      ${className}
      ${buttonColor} 
      ${loading || disabled ? "cursor-not-allowed" : ""}`}
    >
      {children}
      {loading && <Loading />}
    </button>
  );
}
