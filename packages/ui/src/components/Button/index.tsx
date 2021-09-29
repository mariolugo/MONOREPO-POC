import React, { ButtonHTMLAttributes } from 'react';
import { buttonClass } from './styles';
import cn from 'classnames';

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum ButtonVariant {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
  rounded = 'rounded',
  roundedSubmit = 'rounded-submit',
}

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
  danger = 'danger',
}

export enum ButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Changes the size of the button, giving it more or less padding
   */
  size?: ButtonSize;

  /**
   * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
   */
  variant?: ButtonVariant;

  /**
   * The color of the component. It supports those theme colors that makes sense for this component.
   */
  color?: ButtonColor;

  /**
   * Disables the button, disallowing user interaction.
   */
  isDisabled?: boolean;

  /**
   * If set to true, the button will display a centered loading spinner instead of its content.
   */
  isLoading?: boolean;

  /**
   * Extends the button to 100% width.
   */
  isFullWidth?: boolean;

  /**
   * HTML type attribute of the button.
   */
  type?: ButtonType;

  /**
   * Button classname for external classes
   */
  className?: string;
}

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  size = ButtonSize.xs,
  color = 'primary',
  variant = ButtonVariant.rounded,
  isDisabled = false,
  isFullWidth = false,
  type = ButtonType.button,
  className,
  onClick,
}) => {
  /* Render JSX */
  console.log('color', color);
  console.log('type', type);
  console.log('variant', variant);
  return (
    <button
      className={buttonClass(
        className,
        size,
        color,
        isDisabled,
        isFullWidth,
        variant,
        type,
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}>
      <span
        className={cn(
          'text-sm font-semibold w-full',
          variant === 'rounded-submit' && ' h-10 pt-2',
        )}>
        {children}
      </span>
    </button>
  );
};

export default Button;
