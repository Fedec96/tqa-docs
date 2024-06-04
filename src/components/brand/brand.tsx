import Image from "next/image";

import { NAME } from "@/constants/app";
import styles from "./brand.module.css";

export interface BrandProps {
  scale?: number;
  scaleDirection?: "up" | "down";
  animate?: boolean;

  textSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

const baseSizePx = 512;

export const Brand = ({
  scale,
  textSize,
  scaleDirection = "down",
  animate,
}: BrandProps) => {
  const scaleSize = scale || 1;

  const size =
    scaleDirection === "down" ? baseSizePx / scaleSize : baseSizePx * scaleSize;

  return (
    <div
      className={`${
        animate ? `${styles.brand} ` : ""
      }select-none flex items-center`}
    >
      <Image src="/img/logo.png" width={size} height={size} alt="Logo" />

      <span
        className={`bg-gradient-to-r from-sky-600 to-cyan-500 text-transparent bg-clip-text font-bold ml-2${
          textSize ? ` text-${textSize}` : ""
        }`}
      >
        {NAME.toUpperCase()}
      </span>
    </div>
  );
};
