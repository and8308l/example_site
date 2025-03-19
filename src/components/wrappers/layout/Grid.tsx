import React, { Children, PropsWithChildren } from "react";
import styles from "./section.module.css";

export default function Grid({
  columns,
  children,
}: { columns: number } & PropsWithChildren) {
  return (
    <div className={`w-screen ${styles.wrapper}`}>
      <div
        className={`w-screen flex flex-col sm:grid ${styles.limit_width}`}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "2rem" }}
      >
        {children}
      </div>
    </div>
  );
}
