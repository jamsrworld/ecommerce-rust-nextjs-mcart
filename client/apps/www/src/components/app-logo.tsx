import { Link } from "@jamsr-ui/react";
import { cn } from "@repo/utils/class-name";
import NextLink, { type LinkProps } from "next/link";

type Props = {
  href?: LinkProps<never>["href"];
  className?: string;
};

const APP_NAME = "Mcart";

export const AppLogo = (props: Props) => {
  const { href = "/", className } = props;
  return (
    <Link
      className={cn("text-foreground", className)}
      as={NextLink}
      href={href}
    >
      <span className="sr-only">{APP_NAME}</span>
      <svg
        className="h-[20px] w-[80px] md:h-[40px] md:w-[140px]"
        viewBox="0 0 340 73.72921228597585"
      >
        <g
          transform="matrix(1.2668249607086182,0,0,1.2668249607086182,-12.034837688044338,-27.23673792557403)"
          fill="currentColor"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M81.8,59.4c0.7-0.1,1.2-0.6,1.3-1.2l5.3-27.5c0.1-0.4,0-0.9-0.3-1.2C87.9,29.2,87.4,29,87,29H36.9l-2-6.4   c-0.2-0.6-0.8-1.1-1.4-1.1H23.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.2l2,6.4c0,0,0,0,0,0l8.8,28.3l0.7,2.1L39.5,69   c-0.3,0.5-0.3,1,0,1.5c0.3,0.5,0.8,0.7,1.3,0.7H45c-0.9,0.9-1.4,2.1-1.4,3.5c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5   c0-1.4-0.5-2.6-1.4-3.5h23.6c-0.9,0.9-1.4,2.1-1.4,3.5c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5c0-2.2-1.5-4.1-3.5-4.8c0-0.1,0-0.2,0-0.2   c0-0.8-0.7-1.5-1.5-1.5h-36l2.9-5.3L81.8,59.4z" />
            <path d="M11,32h18c0.8,0,1.5-0.7,1.5-1.5S29.9,29,29.1,29H11c-0.8,0-1.5,0.7-1.5,1.5S10.2,32,11,32z" />
            <path d="M18.5,41.2c0,0.8,0.7,1.5,1.5,1.5h10.4c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5H20C19.2,39.7,18.5,40.4,18.5,41.2z" />
            <path d="M32.7,49.5H11c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h21.7c0.8,0,1.5-0.7,1.5-1.5C34.2,50.1,33.5,49.5,32.7,49.5z" />
            <path d="M32.7,57.5H21.8c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h10.8c0.8,0,1.5-0.7,1.5-1.5C34.2,58.2,33.5,57.5,32.7,57.5z   " />
          </g>
        </g>
        <g
          transform="matrix(4.054550647735596,0,0,4.054550647735596,114.40472168082273,-15.192026484365549)"
          fill="currentColor"
        >
          <path d="M5.8 5.720000000000001 l3.34 9.82 l0.04 0 l3.16 -9.82 l4.42 0 l0 14.28 l-2.94 0 l0 -10.12 l-0.04 0 l-3.5 10.12 l-2.42 0 l-3.5 -10.02 l-0.04 0 l0 10.02 l-2.94 0 l0 -14.28 l4.42 0 z M24.18 9.38 c1.4 0 2.54 0.35664 3.42 1.07 s1.36 1.6633 1.44 2.85 l-2.78 0 c-0.18666 -1.1867 -0.88666 -1.78 -2.1 -1.78 c-0.74666 0 -1.3367 0.30666 -1.77 0.92 s-0.65 1.4267 -0.65 2.44 c0 0.97334 0.20666 1.76 0.62 2.36 s0.99334 0.9 1.74 0.9 c1.2933 0 2.0466 -0.7 2.26 -2.1 l2.74 0 c-0.18666 1.3733 -0.71666 2.4234 -1.59 3.15 s-2.0034 1.09 -3.39 1.09 c-1.5333 0 -2.7866 -0.49 -3.76 -1.47 s-1.46 -2.2566 -1.46 -3.83 c0 -1.7067 0.48 -3.0666 1.44 -4.08 s2.24 -1.52 3.84 -1.52 z M35.46 9.38 c3.0134 0.01334 4.52 0.9933 4.52 2.94 l0 5.48 c0 1.0133 0.12 1.7467 0.36 2.2 l-2.88 0 c-0.10666 -0.32 -0.17332 -0.65334 -0.19998 -1 c-0.84 0.85334 -2 1.28 -3.48 1.28 c-1.08 0 -1.9367 -0.27334 -2.57 -0.82 s-0.95 -1.3067 -0.95 -2.28 c0 -0.94666 0.3 -1.68 0.9 -2.2 c0.61334 -0.54666 1.7267 -0.89332 3.34 -1.04 c1.1467 -0.12 1.8733 -0.27 2.18 -0.45 s0.46 -0.45666 0.46 -0.83 c0 -0.46666 -0.14 -0.81332 -0.42 -1.04 s-0.74666 -0.34 -1.4 -0.34 c-0.6 0 -1.0533 0.12334 -1.36 0.37 s-0.48666 0.64332 -0.54 1.19 l-2.84 0 c0.06666 -1.1333 0.53332 -1.9933 1.4 -2.58 s2.0266 -0.88 3.48 -0.88 z M33.1 17.06 c0 0.88 0.58 1.32 1.74 1.32 c1.52 -0.01334 2.2866 -0.79334 2.3 -2.34 l0 -1.1 c-0.22666 0.22666 -0.8 0.39332 -1.72 0.49998 c-0.8 0.09334 -1.3867 0.25668 -1.76 0.49002 s-0.56 0.61 -0.56 1.13 z M48.22 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z M53.56 6.5600000000000005 l0.000019531 3.1 l2.08 0 l0 1.9 l-2.08 0 l0 5.12 c0 0.48 0.08 0.8 0.24 0.96 s0.48 0.24 0.96 0.24 c0.34666 0 0.64 -0.02666 0.88 -0.08 l0 2.22 c-0.4 0.06666 -0.96 0.1 -1.68 0.1 c-1.0933 0 -1.9067 -0.18666 -2.44 -0.56 s-0.8 -1.02 -0.8 -1.94 l0 -6.06 l-1.72 0 l0 -1.9 l1.72 0 l0 -3.1 l2.84 0 z" />
        </g>
      </svg>
    </Link>
  );
};
