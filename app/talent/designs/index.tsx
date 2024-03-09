"use client";

import * as React from "react";

export const Index: Array<{ name: string; component: any }> = [
  {
    name: "password",
    component: React.lazy(() => import("./password")),
  },
  {
    name: "loading",
    component: React.lazy(() => import("./loading")),
  },
  {
    name: "number-animation",
    component: React.lazy(() => import("./number-animation")),
  },
  {
    name: "button-height",
    component: React.lazy(() => import("./button-height")),
  },
  {
    name: "blur-text",
    component: React.lazy(() => import("./blur-text")),
  },
  {
    name: "textarea-tagging",
    component: React.lazy(() => import("./textarea-tagging")),
  },
  {
    name: "two-factor-authentication",
    component: React.lazy(() => import("./two-factor-authentication")),
  },
];