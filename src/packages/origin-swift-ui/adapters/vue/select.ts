
/**
 * Vue adapter for OriginSwift Select component
 * 
 * This is a fully native Vue implementation matching the React component's
 * functionality and styling using Vue's render functions.
 */

import { defineComponent, h, PropType } from 'vue';
import type { SelectOption, SelectProps } from '../../types';

/**
 * Vue-compatible Select component that matches the OriginSwift React Select
 */
export const VueSelect = defineComponent({
  name: 'SwiftSelect',
  
  props: {
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true
    },
    value: String,
    defaultValue: String,
    name: String,
    id: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    required: Boolean,
    error: String,
    className: String,
    testId: String
  },
  
  emits: ['change'],
  
  setup(props, { emit }) {
    const handleChange = (e: Event) => {
      emit('change', (e.target as HTMLSelectElement).value);
    };
    
    const getSelectClassNames = () => {
      const baseClasses = 'swift-select flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swift-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
      
      return [
        baseClasses,
        props.error && 'border-swift-red focus-visible:ring-swift-red',
        props.className
      ];
    };
    
    return () => h('div', { class: 'swift-select-wrapper w-full' }, [
      // Label
      props.label && h('label', {
        for: props.id || props.name,
        class: 'swift-select-label block text-sm font-medium text-gray-700 mb-1'
      }, [
        props.label,
        props.required && h('span', { class: 'text-swift-red ml-1' }, '*')
      ]),
      
      // Select element
      h('select', {
        id: props.id || props.name,
        name: props.name,
        value: props.value,
        disabled: props.disabled,
        required: props.required,
        class: getSelectClassNames(),
        onChange: handleChange,
        'aria-invalid': !!props.error,
        'aria-describedby': props.error ? `${props.name}-error` : undefined,
        'data-testid': props.testId
      }, [
        // Placeholder option
        props.placeholder && h('option', {
          value: '',
          disabled: true
        }, props.placeholder),
        
        // Options from props
        ...(props.options || []).map(option => 
          h('option', {
            value: option.value,
            disabled: option.disabled
          }, option.label)
        )
      ]),
      
      // Error message
      props.error && h('p', {
        id: `${props.name}-error`,
        class: 'swift-select-error mt-1 text-sm text-swift-red'
      }, props.error)
    ]);
  }
});

// Export types
export type { SelectProps };
