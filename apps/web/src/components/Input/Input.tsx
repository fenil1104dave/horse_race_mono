import { forwardRef } from "react";
import { Input, InputProps } from "@mui/material";

export const CommonInput = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return <Input {...props} inputRef={ref} />;
    }
);
