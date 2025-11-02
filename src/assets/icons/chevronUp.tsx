import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={9}
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.0463 8.083L7.46123 1.6989L0.87619 8.083L0 7.23355L7.46124 0L14.9225 7.23355L14.0463 8.083Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
