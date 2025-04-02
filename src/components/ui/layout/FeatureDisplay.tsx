import Grid from "@/components/wrappers/layout/Grid";
import React, { cloneElement, ReactElement } from "react";
import Tile from "../feature/tile/Tile";
import Heading from "../typography/Heading";
import BodyCopy from "../typography/BodyCopy";

export default function FeatureDisplay({
  title,
  featureName,
  featureValues,
  featureImage,
  featureComponent,
  fullScreen = true,
}: {
  title?: string;
  featureName: string;
  featureValues: string[] | number[];
  featureImage: string;
  featureComponent: () => ReactElement;
  fullScreen?: boolean;
}) {
  return (
    <div
      className={
        fullScreen ? "min-h-screen flex flex-col justify-center" : "mb-9"
      }
    >
      {title && (
        <Grid columns={2}>
          <Heading>{title}</Heading>
        </Grid>
      )}
      <Grid columns={featureValues.length}>
        {featureValues.map((feature, i) => {
          return (
            <div key={i}>
              <BodyCopy size="sml">
                <strong>Value:</strong> {feature}
              </BodyCopy>
              {cloneElement(
                featureComponent(),
                { [featureName]: feature },
                <Tile image={featureImage} />
              )}
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
