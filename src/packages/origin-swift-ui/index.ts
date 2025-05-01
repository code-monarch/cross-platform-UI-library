
// Library entrypoint - Common exports
export { Input } from './components/input';
export { Button } from './components/button';
export { Select } from './components/select';
export { Form } from './components/form';

// Export component types
export * from './types';

/**
 * OriginSwift UI Library
 * 
 * A cross-framework component library that works with:
 * - React
 * - Vue
 * - Astro
 * 
 * The library provides a consistent UI experience across different frameworks
 * by using framework-specific adapters that wrap core components.
 */

// Framework adapters exports - use namespace exports to avoid conflicts
// These should be imported as `import * as VueUI from 'origin-swift-ui/vue'`
export * as Vue from './vue';
export * as Astro from './astro';
