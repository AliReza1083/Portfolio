import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export default function Figma({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 43 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-16", className)}
      {...props}
    >
      <path
        d="M10.7357 64.4143C16.6619 64.4143 21.4715 59.6047 21.4715 53.6786V42.9429H10.7357C4.80961 42.9429 0 47.7525 0 53.6786C0 59.6047 4.80961 64.4143 10.7357 64.4143Z"
        fill="#0ACF83"
      />
      <path
        d="M0 32.2072C0 26.281 4.80961 21.4714 10.7357 21.4714H21.4715V42.9429H10.7357C4.80961 42.9429 0 38.1333 0 32.2072Z"
        fill="#A259FF"
      />
      <path
        d="M0 10.7357C0 4.80961 4.80961 0 10.7357 0H21.4715V21.4715H10.7357C4.80961 21.4715 0 16.6619 0 10.7357Z"
        fill="#F24E1E"
      />
      <path
        d="M21.4714 0H32.2072C38.1333 0 42.9429 4.80961 42.9429 10.7357C42.9429 16.6619 38.1333 21.4715 32.2072 21.4715H21.4714V0Z"
        fill="#FF7262"
      />
      <path
        d="M42.9429 32.2072C42.9429 38.1333 38.1333 42.9429 32.2072 42.9429C26.281 42.9429 21.4714 38.1333 21.4714 32.2072C21.4714 26.281 26.281 21.4714 32.2072 21.4714C38.1333 21.4714 42.9429 26.281 42.9429 32.2072Z"
        fill="#1ABCFE"
      />
    </svg>
  );
}