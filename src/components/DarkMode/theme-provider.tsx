"use client";
import dynamic from "next/dynamic";

const DynamicThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider(props: ThemeProviderProps) {
  return <DynamicThemeProvider {...props} />;
}
