
/**
 * Astro adapter for OriginSwift Form component
 * 
 * This adapter allows the React-based Form component to be used in Astro applications
 * with proper hydration directives and client-side behavior.
 */

import { Form as ReactForm } from '../../components/form';
import type { FormProps } from '../../types';

// Export the Form component with Astro-specific metadata
// In Astro, components can be used with hydration directives like client:load
export const AstroForm = ReactForm;

// Export types for Astro usage
export type { FormProps };

// Add helper to create proper hydration props for Astro usage
export const createFormProps = (props: FormProps) => {
  // Process props for Astro compatibility if needed
  return props;
};
