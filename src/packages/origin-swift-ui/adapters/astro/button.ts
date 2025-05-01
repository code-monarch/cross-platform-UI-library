
/**
 * Astro adapter for OriginSwift Button component
 * 
 * This adapter allows the React-based Button component to be used in Astro applications
 * with proper hydration directives and client-side behavior.
 */

import { Button as ReactButton } from '../../components/button';
import type { ButtonProps } from '../../types';

// Export the Button component with Astro-specific metadata
export const AstroButton = ReactButton;

// Export types for Astro usage
export type { ButtonProps };

// Add helper to create proper hydration props for Astro usage
export const createButtonProps = (props: ButtonProps) => {
  // Process props for Astro compatibility if needed
  return props;
};
