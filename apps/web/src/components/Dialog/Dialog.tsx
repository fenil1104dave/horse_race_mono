import { Dialog, DialogProps } from "@mui/material";
import React from "react";

export const CommonDialog: React.FC<DialogProps> = ({ children, ...rest }) => {
  return <Dialog {...rest}>{children}</Dialog>;
};
