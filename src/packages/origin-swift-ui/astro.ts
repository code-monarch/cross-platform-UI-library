
/**
 * Astro-specific exports for OriginSwift UI
 * This file serves as the entry point for Astro integrations
 */

// Export all Astro-adapted components with properly namespaced identifiers
export { AstroForm as Form } from './adapters/astro/form';
export { AstroButton as Button } from './adapters/astro/button';
export { AstroInput as Input } from './adapters/astro/input';
export { AstroSelect as Select } from './adapters/astro/select';

// Export types for Astro usage
export * from './types';

/**
 * To use OriginSwift components in Astro:
 * 
 * 1. Import components from 'origin-swift-ui/astro'
 * 2. Use with appropriate client directives:
 *    - client:load - Load and hydrate the component immediately
 *    - client:idle - Load and hydrate when the browser is idle
 *    - client:visible - Load and hydrate when visible in the viewport
 *    - client:media - Load and hydrate based on a media query
 * 
 * Example:
 * ---
 * import { Form } from 'origin-swift-ui/astro';
 * 
 * const handleSubmit = (data) => {
 *   console.log('Form submitted:', data);
 * };
 * ---
 * 
 * <Form client:load onSubmit={handleSubmit} />
 */
