import Image from "next/image";
import React from "react";
import styles from "./tile.module.css";

export default function Tile({ image }: { image: string }) {
  return (
    <Image
      src={image}
      alt="Example alt text"
      width={576}
      height={432}
      className={styles.wrapper}
    />
  );
}
