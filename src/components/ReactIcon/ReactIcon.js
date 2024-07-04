import React from "react";
import * as AppIcons from "./AppIcons";
export * from "./AppIcons";

const ReactIcon = ({ icon, ...props }) => {
  const Icon = AppIcons[icon || "FaRust"];

  return Icon ? <Icon {...props} /> : null;
};

export default ReactIcon;
