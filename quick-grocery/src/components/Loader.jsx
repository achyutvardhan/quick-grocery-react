import React from "react";
import { Atom } from "react-loading-indicators";

export default function Loader({
  color = "#32cd32",
  size = "medium",
  text = "",
  textColor = "",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        width: "100%",
      }}
    >
      <Atom color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
}
