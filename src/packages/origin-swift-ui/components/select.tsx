
import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  onChange?: (value: string) => void;
  testId?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    options, 
    value, 
    defaultValue,
    name,
    id,
    label,
    placeholder,
    disabled = false,
    required = false,
    error,
    className,
    onChange,
    testId,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const selectClassNames = cn(
      'swift-select flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swift-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      error && 'border-swift-red focus-visible:ring-swift-red',
      className
    );

    return (
      <div className="swift-select-wrapper w-full">
        {label && (
          <label 
            htmlFor={id || name} 
            className="swift-select-label block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-swift-red ml-1">*</span>}
          </label>
        )}
        
        <select
          ref={ref}
          id={id || name}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          className={selectClassNames}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          data-testid={testId}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {error && (
          <p 
            id={`${name}-error`} 
            className="swift-select-error mt-1 text-sm text-swift-red"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'SwiftSelect';

export { Select };
