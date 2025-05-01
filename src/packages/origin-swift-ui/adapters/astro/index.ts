
/**
 * Astro Adapter for OriginSwift UI
 * 
 * This adapter allows OriginSwift UI components to be used in Astro applications.
 * It wraps the React components for proper server-side rendering and client-side hydration
 * in Astro projects, with full support for Astro's client directives.
 */

// Export Astro component adapters with namespaced identifiers
export { AstroInput as Input } from './input';
export { AstroButton as Button } from './button';
export { AstroSelect as Select } from './select';
export { AstroForm as Form } from './form';

/**
 * Usage in Astro:
 * 
 * ```astro
 * ---
 * import { Button } from 'origin-swift-ui/astro';
 * ---
 * 
 * <Button client:load variant="primary">Click me</Button>
 * ```
 * 
 * Note: Use client directives to control hydration:
 * - client:load - Hydrate as soon as page loads
 * - client:idle - Hydrate when browser is idle
 * - client:visible - Hydrate when component is visible
 * - client:media - Hydrate based on media query
 */
