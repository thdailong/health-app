import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M0 0h32v32H0z" opacity={0.01} />
    <path stroke="currentColor" strokeWidth={3} d="M3 8h26M3 16h26M3 24h26" />
  </svg>
);
export default SvgComponent;
