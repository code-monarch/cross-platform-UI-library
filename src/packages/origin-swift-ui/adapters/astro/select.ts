
/**
 * Astro adapter for OriginSwift Select component
 * 
 * This adapter allows the React-based Select component to be used in Astro applications
 * with proper hydration directives and client-side behavior.
 */

import { Select as ReactSelect } from '../../components/select';
import type { SelectProps } from '../../types';

// Export the Select component with Astro-specific metadata
export const AstroSelect = ReactSelect;

// Export types for Astro usage
export type { SelectProps };

// Add helper to create proper hydration props for Astro usage
export const createSelectProps = (props: SelectProps) => {
  // Process props for Astro compatibility if needed
  return props;
};
