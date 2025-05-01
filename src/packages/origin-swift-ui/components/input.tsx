
import React, { forwardRef } from 'react';
import { InputProps } from '../types';
import { cn } from '../../../lib/utils';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text', 
    label, 
    name, 
    value, 
    placeholder, 
    disabled = false, 
    required = false, 
    error, 
    onChange, 
    checked,
    radioGroup,
    testId,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        onChange(value);
      }
    };

    const inputClassNames = cn(
      'swift-input',
      {
        'swift-input-text': type === 'text',
        'swift-input-checkbox': type === 'checkbox',
        'swift-input-radio': type === 'radio',
        'swift-input-disabled': disabled,
        'swift-input-error': error,
      },
      type === 'text' ?
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swift-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      : type === 'checkbox' ?
        'h-4 w-4 rounded border-gray-300 text-swift-blue focus:ring-swift-blue'
      : 
        'h-4 w-4 border-gray-300 text-swift-blue focus:ring-swift-blue',
      className
    );

    // Wrapper for checkbox and radio to handle the label positioning
    const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';
    
    return (
      <div className="swift-input-wrapper w-full">
        {label && !isCheckboxOrRadio && (
          <label 
            htmlFor={name} 
            className="swift-input-label block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-swift-red ml-1">*</span>}
          </label>
        )}
        
        {isCheckboxOrRadio ? (
          <div className="flex items-center">
            <input
              ref={ref}
              type={type}
              id={name}
              name={name}
              checked={checked}
              value={typeof value === 'string' ? value : undefined}
              disabled={disabled}
              required={required}
              onChange={handleChange}
              className={inputClassNames}
              {...(radioGroup ? { name: radioGroup } : {})}
              data-testid={testId}
              {...props}
            />
            {label && (
              <label 
                htmlFor={name} 
                className="swift-input-label ml-2 block text-sm text-gray-700"
              >
                {label}
                {required && <span className="text-swift-red ml-1">*</span>}
              </label>
            )}
          </div>
        ) : (
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            value={typeof value === 'string' ? value : ''}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            className={inputClassNames}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            data-testid={testId}
            {...props}
          />
        )}
        
        {error && (
          <p 
            id={`${name}-error`} 
            className="swift-input-error mt-1 text-sm text-swift-red"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'SwiftInput';

export { Input };
