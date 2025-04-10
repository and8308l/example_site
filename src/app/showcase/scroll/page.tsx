import Bar from "@/components/ui/decorative/bar/Bar";
import Circles from "@/components/ui/decorative/circles/Circles";
import Spirograph from "@/components/ui/decorative/spirograph/Spirograph";
import DescriptionDisplay from "@/components/ui/layout/DescriptionDisplay";
import TitleDisplay from "@/components/ui/layout/TitleDisplay";
import BodyCopy from "@/components/ui/typography/BodyCopy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Scroll",
};

export default function page() {
  return (
    <main>
      <TitleDisplay title={metadata.title as string}>
        <BodyCopy>
          The following examples showcase the ScrollListener wrapper which
          calculates the midpoint of its child element and it&apos;s position
          within the defined window region. The scroll listener is only firing
          when the element is &quot;on screen&quot; by utilising the
          IntersectionObserver.
        </BodyCopy>
        <BodyCopy>
          For each of these examples, the designed element can be interchangable
          and altered. This is simply to highlight the principle.
        </BodyCopy>
      </TitleDisplay>
      <DescriptionDisplay
        description="This element starts its transition 15% from the bottom edge of the screen & completes it's transition at 50% of the screen height."
        featureComponent={() => <Circles amount={10} animationOverlap={0.3} />}
      />
      <DescriptionDisplay
        description="This element starts its transition 10% from the bottom edge of the screen & completes it's transition 25% from the top edge of the screen."
        featureComponent={() => (
          <Spirograph amount={9} animationOverlap={0.5} />
        )}
      />
      <DescriptionDisplay
        description={`This element starts its transition 30% from the bottom edge of the screen & completes it's transition 30% from the top edge of the screen, and "reveals" an underlying version using a vertical inset.`}
        featureComponent={() => <Bar axis="y" />}
      />
      <DescriptionDisplay
        description={`This element starts its transition 30% from the bottom edge of the screen & completes it's transition 30% from the top edge of the screen, and "reveals" an underlying version using a horizontal inset.`}
        featureComponent={() => <Bar axis="x" />}
      />
    </main>
  );
}
