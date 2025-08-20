// src/app/fonts.ts
import localFont from "next/font/local";

export const bulky = localFont({
  src: "../fonts/polysanstrial-bulky-webfont.woff2",
  variable: "--font-bulky",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const bulkyMono = localFont({
  src: "../fonts/polysanstrial-bulkymono-webfont.woff2",
  variable: "--font-bulkymono",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const bulkyWide = localFont({
  src: "../fonts/polysanstrial-bulkywide-webfont.woff2",
  variable: "--font-bulkywide",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const media = localFont({
  src: "../fonts/polysanstrial-median-webfont.woff2",
  variable: "--font-media",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const mediaMono = localFont({
  src: "../fonts/polysanstrial-medianmono-webfont.woff2",
  variable: "--font-mediamono",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const mediaWide = localFont({
  src: "../fonts/polysanstrial-medianwide-webfont.woff2",
  variable: "--font-mediawide",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const neutral = localFont({
  src: "../fonts/polysanstrial-neutral-webfont.woff2",
  variable: "--font-neutral",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const neutralMono = localFont({
  src: "../fonts/polysanstrial-neutralmono-webfont.woff2",
  variable: "--font-neutralmono",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const neutralWide = localFont({
  src: "../fonts/polysanstrial-neutralwide-webfont.woff2",
  variable: "--font-neutralwide",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const slim = localFont({
  src: "../fonts/polysanstrial-slim-webfont.woff2",
  variable: "--font-slim",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const slimMono = localFont({
  src: "../fonts/polysanstrial-slimmono-webfont.woff2",
  variable: "--font-slimmono",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const slimWide = localFont({
  src: "../fonts/polysanstrial-slimwide-webfont.woff2",
  variable: "--font-slimwide",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Group them for easier import
export const allFonts = [
  bulky.variable,
  bulkyMono.variable,
  bulkyWide.variable,
  media.variable,
  mediaMono.variable,
  mediaWide.variable,
  neutral.variable,
  neutralMono.variable,
  neutralWide.variable,
  slim.variable,
  slimMono.variable,
  slimWide.variable,
].join(" ");
