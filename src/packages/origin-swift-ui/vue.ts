
/**
 * Vue-specific exports for OriginSwift UI
 * This file serves as the entry point for Vue integrations
 */

// Export Vue-adapted components directly
export { VueInput as Input } from './adapters/vue/input';
export { VueButton as Button } from './adapters/vue/button';
export { VueSelect as Select } from './adapters/vue/select';
export { VueForm as Form } from './adapters/vue/form';

// Export types for Vue usage
export * from './types';

/**
 * OriginSwift UI for Vue
 * 
 * Usage example:
 * 
 * <template>
 *   <div>
 *     <Button variant="primary" @click="handleClick">Click me</Button>
 *     <Input type="text" label="Name" v-model="name" />
 *     <Select :options="options" v-model="selected" />
 *     <Form @submit="handleSubmit" />
 *   </div>
 * </template>
 * 
 * <script>
 * import { Button, Input, Select, Form } from 'origin-swift-ui/vue';
 * 
 * export default {
 *   components: { Button, Input, Select, Form },
 *   data() {
 *     return {
 *       name: '',
 *       selected: '',
 *       options: [
 *         { label: 'Option 1', value: '1' },
 *         { label: 'Option 2', value: '2' }
 *       ]
 *     };
 *   },
 *   methods: {
 *     handleClick() {
 *       console.log('Button clicked');
 *     },
 *     handleSubmit(data) {
 *       console.log('Form submitted', data);
 *     }
 *   }
 * };
 * </script>
 */
