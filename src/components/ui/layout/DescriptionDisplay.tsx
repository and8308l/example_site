import Grid from "@/components/wrappers/layout/Grid";
import React, { cloneElement, ReactElement } from "react";
import BodyCopy from "../typography/BodyCopy";

// Props in this component have been written within the file as they are only here for temporary demonstration purposes
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
        <BodyCopy size="sml">{description}</BodyCopy>
        {cloneElement(featureComponent())}
      </Grid>
    </div>
  );
}
