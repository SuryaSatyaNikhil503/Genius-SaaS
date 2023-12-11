"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("756b3be9-b3b2-4ec0-8c9c-d71eee5f83de");
  }, []);

  return null;
};
