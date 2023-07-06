import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export default function CSS({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 58 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-16", className)}
      {...props}
    >
      <path
        d="M5.90963 57.9752L0.742676 0H57.5378L52.3639 57.966L29.1057 64.4144L5.90963 57.9752Z"
        fill="#1572B6"
      />
      <path
        d="M29.1406 59.4865L47.9358 54.2759L52.3574 4.74121H29.1406V59.4865Z"
        fill="#33A9DC"
      />
      <path
        d="M29.1406 25.745H38.5497L39.1985 18.4639H29.1406V11.353H46.9696L46.7994 13.2602L45.0533 32.8559H29.1406V25.745Z"
        fill="white"
      />
      <path
        d="M29.185 44.2114L29.1528 44.2206L21.2344 42.0812L20.7283 36.4104H13.5898L14.586 47.5748L29.1505 51.6191L29.185 51.6099V44.2114Z"
        fill="#EBEBEB"
      />
      <path
        d="M37.9444 32.5547L37.0886 42.0765L29.1587 44.216V51.6144L43.7347 47.5747L43.8429 46.3739L45.0782 32.5547H37.9444Z"
        fill="white"
      />
      <path
        d="M29.1664 11.353V18.4639H11.9908L11.8481 16.8651L11.5238 13.2602L11.3535 11.353H29.1664ZM29.1411 25.745V32.8559H21.3216L21.179 31.2571L20.8569 27.6522L20.6867 25.745H29.1411Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
