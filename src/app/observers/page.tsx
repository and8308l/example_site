import React from "react";
import StickyScreen from "@/components/wrappers/StickyScreen";
import Fade from "@/components/wrappers/animated/Fade";
import VerticalSwipe from "@/components/wrappers/animated/VerticalSwipe";
import Heading from "@/components/ui/typography/Heading";
import Grid from "@/components/wrappers/layout/Grid";
import HorizontalSwipe from "@/components/wrappers/animated/HorizontalSwipe";
import Circles from "@/components/ui/decorative/circles/Circles";
import Bar from "@/components/ui/decorative/bar/Bar";
import Spirograph from "@/components/ui/decorative/spirograph/Spirograph";

export default function Observer() {
  return (
    <main>
      <Circles amount={10} animationOverlap={0.3} />
      <Spirograph amount={9} animationOverlap={0.5} size={300} />

      <Bar direction="horizontal" />
      <Bar direction="vertical" />

      <section style={{ padding: "10rem 0" }}></section>
      {/* <StickyScreen position={3}>
        <Grid columns={2}>
          <Heading>Sticky Title One</Heading>
        </Grid>
      </StickyScreen>
      <StickyScreen position={3}>
        <Grid columns={2}>
          <span></span>
          <Heading>Sticky Title Two with extended title length</Heading>
        </Grid>
      </StickyScreen>
      <StickyScreen position={3}>
        <Heading size="lrg">Sticky Title Three</Heading>
      </StickyScreen> */}
      <section>
        {/* <Grid columns={2}>
          <div>
            <Heading>Lorem ipsum imperdiet dolor</Heading>
            <HorizontalSwipe animation={1}>
              <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
            </HorizontalSwipe>
          </div>
          <div>
            <Heading>Lorem ipsum imperdiet dolor</Heading>
            <HorizontalSwipe animation={2}>
              <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
            </HorizontalSwipe>
          </div>
        </Grid> */}
        {/* <HorizontalSwipe />
        <HorizontalSwipe />
        <HorizontalSwipe />
        <h3>Lorem ipsum imperdiet dolor</h3>
        <HorizontalSwipe animation={1}>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </HorizontalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <HorizontalSwipe animation={2}>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </HorizontalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <HorizontalSwipe animation={3}>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </HorizontalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <HorizontalSwipe animation={4}>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </HorizontalSwipe>
        <HorizontalSwipe />
        <HorizontalSwipe />
        <HorizontalSwipe /> */}
        {/* 
        <h3>Lorem ipsum imperdiet dolor</h3>
        <VerticalSwipe speed="med">
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </VerticalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <VerticalSwipe speed="fast">
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </VerticalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <VerticalSwipe speed="x_fast">
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </VerticalSwipe>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <Fade speed="med" onExit>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </Fade>
       */}
        {/* <h3>Lorem ipsum imperdiet dolor</h3>
        <Fade speed="fast" onExit>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </Fade>
        <h3>Lorem ipsum imperdiet dolor</h3>
        <Fade speed="x_fast" onExit>
          <div className="relative aspect-square p-10 sm:max-w-[578px] m-auto bg-red-500"></div>
        </Fade> */}
      </section>
    </main>
  );
}
