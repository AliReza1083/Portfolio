"use client";

import ImagePreview from "@/app/components/Modal/ImagePreview";
import React, { useEffect, useState } from "react";

export default function ModalProviders() {
  const [isMountain, setIsMountain] = useState(false);

  useEffect(() => {
    setIsMountain(true);
  }, []);

  if (!isMountain) {
    return null;
  }

  return (
    <>
      <ImagePreview />
    </>
  );
}
