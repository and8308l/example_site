import FeatureDisplay from "@/components/ui/layout/FeatureDisplay";
import TitleDisplay from "@/components/ui/layout/TitleDisplay";
import BodyCopy from "@/components/ui/typography/BodyCopy";
import HorizontalSwipe from "@/components/wrappers/animated/HorizontalSwipe";
import VerticalSwipe from "@/components/wrappers/animated/VerticalSwipe";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Swipe",
};

const imageSrc = "/images/ferns.webp";
export default function page() {
  return (
    <main>
      <TitleDisplay title={metadata.title as string}>
        <BodyCopy>
          The following examples showcase the two Swipe wrappers which utilises
          an IntersectionObserver to detect a child elements entry and exit of
          the screen.
        </BodyCopy>
        <BodyCopy>
          The custom props for both wrappers vary the transition speed & delay.
        </BodyCopy>
        <BodyCopy>
          An extra custom prop exists for HorizontalSwipe altering the type of
          animation.
        </BodyCopy>
        <ul className="list-disc">
          <li>
            <BodyCopy>
              Animation 1 enters and leave from the left side.
            </BodyCopy>
          </li>
          <li>
            <BodyCopy>
              Animation 2 enters from the left side and leaves via the right.
            </BodyCopy>
          </li>
          <li>
            <BodyCopy>
              Animation 3 enters and leave from the right side.
            </BodyCopy>
          </li>
          <li>
            <BodyCopy>
              Animation 4 enters from the right side and leaves via the left.
            </BodyCopy>
          </li>
        </ul>
      </TitleDisplay>
      <FeatureDisplay
        title={`Vertical Swipe wrapper with prop "speed"`}
        featureName="speed"
        featureValues={["x_fast", "fast", "med"]}
        featureImage={imageSrc}
        featureComponent={() => <VerticalSwipe />}
      />
      <FeatureDisplay
        title={`Vertical Swipe wrapper with prop "delay"`}
        featureName="delay"
        featureValues={[0, 1, 2, 3, 4, 5]}
        featureImage={imageSrc}
        featureComponent={() => <VerticalSwipe />}
      />
      <FeatureDisplay
        title={`Horizontal Swipe wrapper with prop "animation"`}
        featureName="animation"
        featureValues={[1]}
        featureImage={imageSrc}
        featureComponent={() => <HorizontalSwipe />}
        fullScreen={false}
      />
      <FeatureDisplay
        featureName="animation"
        featureValues={[2]}
        featureImage={imageSrc}
        featureComponent={() => <HorizontalSwipe />}
        fullScreen={false}
      />
      <FeatureDisplay
        featureName="animation"
        featureValues={[3]}
        featureImage={imageSrc}
        featureComponent={() => <HorizontalSwipe />}
        fullScreen={false}
      />
      <FeatureDisplay
        featureName="animation"
        featureValues={[4]}
        featureImage={imageSrc}
        featureComponent={() => <HorizontalSwipe />}
        fullScreen={false}
      />
      <div className="h-screen"></div>
    </main>
  );
}
