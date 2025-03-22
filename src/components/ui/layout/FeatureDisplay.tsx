import Grid from "@/components/wrappers/layout/Grid";
import React, { cloneElement, ReactElement } from "react";
import Tile from "../feature/tile/Tile";
import Heading from "../typography/Heading";

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
              <p className="mb-5">
                <strong>Value:</strong> {feature}
              </p>
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
