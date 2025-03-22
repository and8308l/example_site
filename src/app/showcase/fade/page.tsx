import FeatureDisplay from "@/components/ui/layout/FeatureDisplay";
import TitleDisplay from "@/components/ui/layout/TitleDisplay";
import Fade from "@/components/wrappers/animated/Fade";
import { Metadata } from "next";
import React from "react";

const imageSrc = "/images/barn.jpg";

export const metadata: Metadata = {
  title: "Fade",
};

export default function page() {
  return (
    <main>
      <TitleDisplay title={metadata.title as string}>
        <p>
          The following examples showcase the Fade wrapper which utilises an
          IntersectionObserver to detect a child elements entry and exit of the
          screen.
        </p>
        <p>
          The custom props vary the transition speed, delay & if the transition
          also occurs on screen exit.
        </p>
      </TitleDisplay>
      <FeatureDisplay
        title={`Fade wrapper with prop "speed"`}
        featureName="speed"
        featureValues={["x_fast", "fast", "med"]}
        featureImage={imageSrc}
        featureComponent={() => <Fade />}
      />
      <FeatureDisplay
        title={`Fade wrapper with props "speed" and "onExit"`}
        featureName="speed"
        featureValues={["x_fast", "fast", "med"]}
        featureImage={imageSrc}
        featureComponent={() => <Fade onExit />}
      />
      <FeatureDisplay
        title={`Fade wrapper with prop "delay"`}
        featureName="delay"
        featureValues={[0, 1, 2, 3, 4, 5]}
        featureImage={imageSrc}
        featureComponent={() => <Fade />}
      />
      <FeatureDisplay
        title={`Fade wrapper with props "speed" and "onExit"`}
        featureName="delay"
        featureValues={[0, 1, 2, 3, 4, 5]}
        featureImage={imageSrc}
        featureComponent={() => <Fade onExit />}
      />
    </main>
  );
}
