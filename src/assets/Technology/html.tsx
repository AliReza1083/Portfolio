import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export default function HTML({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 58 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-16", className)}
      {...props}
    >
      <path
        d="M6.11212 57.9752L0.942871 0H57.7425L52.5664 57.966L29.3082 64.4144L6.11212 57.9752Z"
        fill="#E44F26"
      />
      <path
        d="M29.3433 59.4865L48.1385 54.2759L52.56 4.74121H29.3433V59.4865Z"
        fill="#F1662A"
      />
      <path
        d="M29.3431 26.2421H19.934L19.2853 18.961H29.3431V11.8501H11.5142L11.6844 13.7595L13.4305 33.353H29.3431V26.2421ZM29.3431 44.7083L29.3109 44.7175L21.3926 42.5804L20.8865 36.9096H13.748L14.7441 48.0717L29.3109 52.116L29.3431 52.1068V44.7083Z"
        fill="#EBEBEB"
      />
      <path
        d="M29.3174 26.2421V33.353H38.0731L37.2496 42.5758L29.3174 44.7152V52.1137L43.8957 48.0717L44.0016 46.8708L45.6717 28.1515L45.8466 26.2421H29.3174ZM29.3174 11.8501V18.961H46.493L46.6357 17.3644L46.96 13.7595L47.1303 11.8501H29.3174Z"
        fill="white"
      />
    </svg>
  );
}
