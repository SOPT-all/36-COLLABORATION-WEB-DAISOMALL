import type { SVGProps } from 'react';

const SmallArrowRightIcon = ({
  stroke = '#374553',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 1L5 5L1 9" stroke={stroke} strokeLinecap="square" />
  </svg>
);

export default SmallArrowRightIcon;
