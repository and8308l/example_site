import React, { PropsWithChildren } from "react";
import Heading from "../typography/Heading";
import Flex from "@/components/wrappers/layout/Flex";

export default function TitleDisplay({
  title,
  children,
}: { title: string } & PropsWithChildren) {
  return (
    <div className="pt-[20%] pb-[15%]">
      <Flex direction="col">
        <Heading size="lrg" h1>
          {title}
        </Heading>
        <div className="md:w-2/3">{children}</div>
      </Flex>
    </div>
  );
}
