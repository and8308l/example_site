import Grid from "@/components/wrappers/layout/Grid";
import React, { cloneElement, ReactElement } from "react";

export default function DescriptionDisplay({
  description,
  featureComponent,
}: {
  description: string;
  featureComponent: () => ReactElement;
}) {
  return (
    <div className="pt-[5%] pb-[10%]">
      <Grid columns={3} align="center" justify="center">
        <p>{description}</p>
        {cloneElement(featureComponent())}
      </Grid>
    </div>
  );
}
