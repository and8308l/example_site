"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navbar.module.css";
import Flex from "@/components/wrappers/layout/Flex";
export default function Navbar({
  items,
}: {
  items: Array<{ path: string; label: string }>;
}) {
  const pathname = usePathname();
  return (
    <nav className={styles.wrapper}>
      <Flex>
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`${styles.link} ${
              pathname == item.path ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </Flex>
    </nav>
  );
}
