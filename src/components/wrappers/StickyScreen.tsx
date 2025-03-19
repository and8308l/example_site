import React, { PropsWithChildren } from "react";

export default function StickyScreen({
  position = 1,
  children,
}: PropsWithChildren & { position?: 1 | 2 | 3 }) {
  const Y = position * 12.5 + 2.5;

  return (
    <div
      className="w-screen h-screen sticky top-0"
      style={{
        background: `linear-gradient(transparent ${Y - 2}%, #ffffff ${Y}%)`,
      }}
    >
      <div className="w-screen absolute" style={{ top: `${Y}%` }}>
        {children}
      </div>
    </div>
  );
}
