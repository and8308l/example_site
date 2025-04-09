import Image from "next/image";
import React from "react";
import styles from "./tile.module.css";

// Props in this component have been written within the file as they are only here for temporary demonstration purposes
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
