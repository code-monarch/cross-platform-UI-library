
import { HTMLAttributes, ReactNode } from 'react';

// Base component props
export interface BaseProps {
  className?: string;
  testId?: string;
}

// Input props
export interface InputProps extends BaseProps {
  type?: 'text' | 'checkbox' | 'radio';
  label?: string;
  name?: string;
  value?: string | boolean;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onChange?: (value: any) => void;
  checked?: boolean;
  // For radio buttons
  radioGroup?: string;
}

// Button props
export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Form data interface
export interface FormData {
  name: string;
  email: string;
  country: string;
  agreeToTerms: boolean;
  notificationType: string;
  [key: string]: any; // Allow dynamic property access
}

// Form props interface
export interface FormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

// Select options interface
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Select props interface 
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
