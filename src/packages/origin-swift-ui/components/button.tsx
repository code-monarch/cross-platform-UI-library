
import React, { forwardRef } from 'react';
import { ButtonProps } from '../types';
import { cn } from '../../../lib/utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    loading = false, 
    onClick, 
    type = 'button', 
    children,
    leftIcon,
    rightIcon,
    testId,
    ...props 
  }, ref) => {
    const baseClassNames = 'swift-button inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variantClassNames = {
      primary: 'bg-swift-blue text-white hover:bg-swift-blue/90 active:bg-swift-blue/100',
      secondary: 'bg-swift-gray-200 text-swift-gray-800 hover:bg-swift-gray-300 active:bg-swift-gray-400',
      outline: 'border border-swift-gray-300 bg-transparent hover:bg-swift-gray-100 text-swift-gray-800',
      ghost: 'bg-transparent hover:bg-swift-gray-100 text-swift-gray-800',
      destructive: 'bg-swift-red text-white hover:bg-swift-red/90',
    };

    const sizeClassNames = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base',
    };

    const buttonClassNames = cn(
      baseClassNames,
      variantClassNames[variant],
      sizeClassNames[size],
      loading && 'opacity-70 pointer-events-none',
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={buttonClassNames}
        data-testid={testId}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {leftIcon && !loading && (
          <span className="mr-2">{leftIcon}</span>
        )}
        
        {children}
        
        {rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'SwiftButton';

export { Button };
