"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const DynamicThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider(props: {
  children: ReactNode;
  [key: string]: any;
}) {
  return <DynamicThemeProvider {...props} />;
}
