This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Components

### Wrappers

### `Observer`
- This component provides an easy way to observe when an element enters or exits the viewport using the Intersection Observer API.
- The `onEntry` and `onExit` callbacks passes either the top or bottom screen edge (`YDirection`) of the intersection to the callbacks.
- In this example the root margin is fixed for simplicity and accounts for the nav height, however the margin values can easily be amended to be variable, dynamic or just set at a different value.
- Uses `'use client'` directive, making it suitable for client-side interactions.

| Prop                    | Description                                                                      | Type                                   |
|-------------------------|----------------------------------------------------------------------------------|----------------------------------------|
| **threshold**           | Allows you to specify the intersection threshold (e.g., 0.5 for 50% visibility). | `number`                               |
| **onEntry**             | A callback to handle element entering the required threshold.                    | `(e: Element, d: YDirection) => void;` |
| **onExit**              | A callback to handle element leaving the required threshold.                     | `(e: Element, d: YDirection) => void;` |
| **children** *optional* | The children to be observed.                                                     | `ReactNode \| undefined`               |

### `ScrollListener`

- This component provides a way to track the scroll progress of an element within a specified viewport region. It calculates the element's midpoint progress and triggers a callback with a normalised value between 0 and 1.
- The `start` and `end` values you to specify the start and end positions of the viewport region for tracking.
- The `onScroll` callback that receives the normalised scroll progress (0-1).
- Uses the `Observer` component to start and stop the scroll listener based on element visibility.
- Uses `'use client'` directive, making it suitable for client-side interactions.

| Prop                    | Description                                                                                                                                   | Type                     |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **start**               | Defines a percentage from the bottom of the screen that the "scroll journey" should be calculated from. (e.g., 0.3 for 30% from the bottom).  | `number`                 |
| **end**                 | Defines a percentage from the top of the screen that the "scroll journey" should be calculated from. (e.g., 0.3 for 30% from the top).        | `number`                 |
| **onScroll**            | A callback to handle the percentage that the elements midpoint has traveled between the start and end points.                                 | `(n: number) => void;`   |
| **children** *optional* | The children to be observed.                                                     			                              	                  | `ReactNode \| undefined` |


### `Flex`

- This component provides a flexible layout container using CSS flexbox.
- Allows you to specify the direction of the flex container.
- The `justify` and `align` values determine the positioning of the elements within the layout by setting `justify-content` and `align-items` respectively.
- Sets the container width to full screen and limits the content width within it with `max-width: 1200px;`

| Prop                    | Description                                                              | Type                     |
|-------------------------|--------------------------------------------------------------------------|--------------------------|
| **direction**           | Specifies the flex direction.                                            | `FlexDirection`          |
| **justify** *optional*  | Controls the alignment of items along the main axis. (default: `start`)  | `JustifyContent`         |
| **align** *optional*    | Controls the alignment of items along the cross axis. (default: `start`) | `AlignBasic`             |
| **children** *optional* | The children to be observed.                                             | `ReactNode \| undefined` |


### `Grid`

- This component provides a grid layout container using CSS Grid.
- Allows you to specify the number of grid columns. These will vary on smaller break points.
- The `justify` and `align` values determine the positioning of the elements within the layout by setting `justify-items` and `align-items` respectively.
- Sets the container width to full screen and limits the content width within it with `max-width: 1200px;`

| Prop                    | Description                                                                    | Type                      |
|-------------------------|--------------------------------------------------------------------------------|---------------------------|
| **columns**             | Specifies the number of grid columns                                           | `FlexDirection`           |
| **justify** *optional*  | Controls the alignment of grid items along the inline axis. (default: `start`) | `AlignBasic`              |
| **align** *optional*    | Controls the alignment of grid items along the block axis. (default: `start`)  | `AlignBasic`              |
| **children** *optional* | The children to be observed.                                                   | `ReactNode \| undefined`  |


### `Fade`

- This component provides a fade-in transition effect for its children using CSS transitions triggered by element visibility, utilising the Observer component.
- Allows you to specify the transition speed and delay to create smooth staggered effects.
- Allows you to specify the if the transition occurs on exit as well as entry.
- Uses `'use client'` directive, making it suitable for client-side interactions.

| Prop                    | Description                                                                                       | Type                     |
|-------------------------|---------------------------------------------------------------------------------------------------|--------------------------|
| **speed** *optional*    | Specifies the transition speed using predefined values. (default: `"med"`)                        | `TransitionSpeed`        |
| **delay** *optional*    | Specifies the delay before the transition starts using predefined values. (default: `0`)          | `TransitionDelay`        |
| **onExit** *optional*   | Specifies if an element will "fade out" when the component exits the viewport. (default: `false`) | `boolean`                |
| **children** *optional* | The children to be observed.                                                                      | `ReactNode \| undefined` |


### `HorizontalSwipe`
- This component provides a horizontal swipe transition effect for its children using CSS transitions triggered by element visibility, utilising the Observer component. 
- Configurable animation to create variations of how the element enters and exits both differently for both the top and bottom of the screen screen.
- Allows you to specify the transition speed and delay to create smooth staggered effects.
- Uses `'use client'` directive, making it suitable for client-side interactions.

| Prop                     | Description                                                                                                | Type                     |
|--------------------------|------------------------------------------------------------------------------------------------------------|--------------------------|
| **animation** *optional* | Specifies the combinations of directions the elements will enter and leave the screen from. (default: `1`) | `1 | 2 | 3 | 4`          |
| **speed** *optional*     | Specifies the transition speed using predefined values. (default: `"med"`)                                 | `TransitionSpeed`        |
| **delay** *optional*     | Specifies the delay before the transition starts using predefined values. (default: `0`)                   | `TransitionDelay`        |
| **children** *optional*  | The children to be observed.                                                                               | `ReactNode \| undefined` |


### `VerticalSwipe`

- This component provides a vertical swipe animation effect for its children using CSS transitions triggered by element visibility, utilising the Observer component.
- The transition will appropriately reflect the direction the element enters of leaves the viewport (top or bottom).
- Allows you to specify the transition speed and delay to create smooth staggered effects.
- Uses `'use client'` directive, making it suitable for client-side interactions.

| Prop                     | Description                                                                                                | Type                     |
|--------------------------|------------------------------------------------------------------------------------------------------------|--------------------------|
| **speed** *optional*     | Specifies the transition speed using predefined values. (default: `"med"`)                                 | `TransitionSpeed`        |
| **delay** *optional*     | Specifies the delay before the transition starts using predefined values. (default: `0`)                   | `TransitionDelay`        |
| **children** *optional*  | The children to be observed.                                                                               | `ReactNode \| undefined` |


## Types
| Name              | Type                                              |
|-------------------|---------------------------------------------------|
| YDirection        | `"top" \| "bottom"`                               |
| XDirection        | `"left" \| "right"`                               |
| Axis              | `"x" \| "y"`                                      |
| FlexDirection     | `"row" \| "col"`                                  |
| AlignBasic        | `"start" \| "center" \| "end"`                    |
| JustifyContent    | `AlignBasic \| "between" \| "around" \| "evenly"` |
| TransitionSpeed   | `"med" \| "fast" \| "x_fast"`                     |
| TransitionDelay   | `0 \| 1 \| 2 \| 3 \| 4 \| 5`                      |
| CSSModule         | `{readonly [key: string]: string;}`               |
| AnimationCallback | `(e: Element, d: YDirection) => void`             |