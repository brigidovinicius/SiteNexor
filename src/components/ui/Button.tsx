import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils/cn';

const buttonVariants = cva(
  'btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-accent shadow-sm hover:shadow-md',
        secondary:
          'bg-brand text-white hover:bg-brand-hover active:scale-[0.98] focus-visible:outline-brand shadow-sm hover:shadow-md',
        ghost:
          'text-text-secondary hover:bg-surface hover:text-text active:scale-[0.98] focus-visible:outline-border',
        outline:
          'border border-border bg-transparent text-text-secondary hover:bg-surface hover:text-text active:scale-[0.98] focus-visible:outline-border',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-md',
        md: 'h-11 px-6 text-[0.9375rem] rounded-md',
        lg: 'h-13 px-8 text-base rounded-lg',
        icon: 'h-11 w-11 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

