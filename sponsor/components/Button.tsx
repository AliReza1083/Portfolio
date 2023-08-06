import React, { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva("rounded-full duration-200", {
  variants: {
    variant: {
      default: "text-xl p-3 hover:bg-button-hover flex items-center gap-5 px-4",
      primary:
        "text-center flex justify-center bg-primary hover:bg-primary-hover text-[17px] text-white font-bold w-full py-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;