import cn from 'classnames';
import { ButtonSize, ButtonColor } from './index';

/* Class assignment */
export const buttonClass = (
  className,
  size,
  color,
  isDisabled,
  isFullWidth,
  variant,
  type,
) =>
  cn(
    className,

    /* button (base) */
    'focus:outline-none flex items-center justify-center space-x-2',
    'text-center whitespace-nowrap',
    'rounded',
    'transition duration-100 ease-out',

    /* button--xs */
    size === ButtonSize.xs && 'text-sm px-2 py-4 h-10 w-40',
    size === ButtonSize.md && 'text-md px-6 py-4 h-10',

    /* button--primary */
    color === ButtonColor.primary && 'text-basic-white',
    color === ButtonColor.primary && 'bg-primary-300 hover:bg-primary-600',

    /* button--secondary */
    color === ButtonColor.secondary && 'text-gray-500',
    color === ButtonColor.secondary && 'bg-gray-100 hover:bg-primary-600',

    /* button--isFullWidth */
    isFullWidth === true && 'w-full',

    /* button--isDisabled */
    isDisabled === true && 'opacity-5 pointer-events-none',

    variant === 'rounded' &&
      'border-0 border-b-0 border-t-0 border-r-0 border-l-0 rounded-full  m-auto  ',

    type === 'submit' &&
      variant === 'rounded' &&
      'bg-gray-100 text-md px-6 py-4 h-10',

    size === ButtonSize.md &&
      type === 'submit' &&
      variant === 'rounded-submit' &&
      'bg-gray-500 text-basic-white hover:border-t-2 border-primary-300 hover:border-blue text-md px-6 py-4 h-12 w-8/12',
    size === ButtonSize.xs &&
      type === 'submit' &&
      variant === 'rounded-submit' &&
      'bg-gray-500 text-basic-white hover:border-t-2 border-primary-300 hover:border-blue w-10 text-md px-6 py-4 h-12 w-40',
    type === 'submit' &&
      variant === 'rounded-submit' &&
      'h-10 py-2 px-4 border-t-0 border-l-0 border-b-8 border-r-8 hover:border-b-2  rounded-full m-auto  text-md px-6 py-4 h-10',
    /* button--primary */
  );
