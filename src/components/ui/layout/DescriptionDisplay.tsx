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
    <div className="py-9">
      <Grid columns={3}>
        <p>{description}</p>
        <div className="flex justify-center align-center">
          {cloneElement(featureComponent())}
        </div>
      </Grid>
    </div>
  );
}
