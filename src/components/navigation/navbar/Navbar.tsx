"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navbar.module.css";
import Flex from "@/components/wrappers/layout/Flex";

interface NavbarProps {
  items: Array<{ path: string; label: string }>;
}

export default function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  return (
    <nav className={styles.wrapper}>
      <Flex direction="row">
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
