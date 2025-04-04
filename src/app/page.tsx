import Tile from "@/components/ui/feature/tile/Tile";
import BodyCopy from "@/components/ui/typography/BodyCopy";
import Heading from "@/components/ui/typography/Heading";
import HorizontalSwipe from "@/components/wrappers/animated/HorizontalSwipe";
import VerticalSwipe from "@/components/wrappers/animated/VerticalSwipe";
import Flex from "@/components/wrappers/layout/Flex";
import Grid from "@/components/wrappers/layout/Grid";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center">
        <Flex
          direction="col"
          justify="center"
          align="center"
          className="h-screen"
        >
          <Heading size="lrg" h1>Example Heading</Heading>
          <BodyCopy size="lrg">
            This website serves as a dynamic showcase for a collection of
            custom-built components, designed to illustrate their functionality,
            simplicity where appropriate and versatility if needed. It&#39;s
            intended as a living portfolio, where new components will be added
            over time, reflecting evolving needs and expanding capabilities.
          </BodyCopy>
          <BodyCopy>
            The following placeholder content is intended as a very basic
            example of how these compontents could be used to create some visual
            interest with what might usually be slightly plain design elements.
          </BodyCopy>
        </Flex>
      </section>
      <section className="py-9 min-h-screen">
        <Grid columns={2}>
          <div>
            <Heading>Lorem ipsum imperdiet dolor</Heading>
            <HorizontalSwipe animation={1}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
          </div>
          <div>
            <Heading>Lorem ipsum imperdiet dolor</Heading>
            <HorizontalSwipe animation={3}>
              <Tile image="/images/ferns.webp" />
            </HorizontalSwipe>
          </div>
        </Grid>
      </section>
      <section className="py-9">
        <Grid columns={2}>
          <Heading>Lorem ipsum imperdiet dolor</Heading>
          <BodyCopy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BodyCopy>
        </Grid>
      </section>
      <section className="py-9 min-h-screen">
        <Grid columns={3}>
          <VerticalSwipe>
            <Heading size="sml">Lorem ipsum imperdiet dolor</Heading>
            <Tile image="/images/ferns.webp" />
          </VerticalSwipe>
          <VerticalSwipe delay={1}>
            <Heading size="sml">Lorem ipsum imperdiet dolor</Heading>
            <Tile image="/images/ferns.webp" />
          </VerticalSwipe>
          <VerticalSwipe delay={2}>
            <Heading size="sml">Lorem ipsum imperdiet dolor</Heading>
            <Tile image="/images/ferns.webp" />
          </VerticalSwipe>
        </Grid>
      </section>
      <section className="py-9">
        <Grid columns={2}>
          <Heading>Lorem ipsum imperdiet dolor</Heading>
        </Grid>
        <Grid columns={2}>
          <BodyCopy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BodyCopy>
          <BodyCopy>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </BodyCopy>
        </Grid>
      </section>
      <section className="py-9">
        <div className="py-5">
          <Grid columns={4}>
            <HorizontalSwipe animation={4}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={4} delay={1}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={4} delay={2}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={4} delay={3}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
          </Grid>
        </div>
        <div className="py-5">
          <Grid columns={4}>
            <HorizontalSwipe animation={2} delay={3}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={2} delay={2}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={2} delay={1}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
            <HorizontalSwipe animation={2}>
              <Tile image="/images/barn.webp" />
            </HorizontalSwipe>
          </Grid>
        </div>
      </section>
      <section className="w-screen h-screen flex justify-center">
        <Flex
          direction="col"
          justify="center"
          align="center"
          className="h-screen"
        >
          <BodyCopy>
            Explore the pages in the menu to see these components in more detail to see each variation of customisation in action.
          </BodyCopy>
        </Flex>
      </section>
    </>
  );
}
