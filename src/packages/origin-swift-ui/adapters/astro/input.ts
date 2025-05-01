
/**
 * Astro adapter for OriginSwift Input component
 * 
 * This adapter allows the React-based Input component to be used in Astro applications
 * with proper hydration directives and client-side behavior.
 */

import { Input as ReactInput } from '../../components/input';
import type { InputProps } from '../../types';

// Export the Input component with Astro-specific metadata
export const AstroInput = ReactInput;

// Export types for Astro usage
export type { InputProps };

// Add helper to create proper hydration props for Astro usage
export const createInputProps = (props: InputProps) => {
  // Process props for Astro compatibility if needed
  return props;
};
