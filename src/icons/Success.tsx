import { IconProps } from './util';

const Success: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`flex-shrink-0 size-3 ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 6 7 17l-5-5' />
    <path d='m22 10-7.5 7.5L13 16' />
  </svg>
);

export default Success;
