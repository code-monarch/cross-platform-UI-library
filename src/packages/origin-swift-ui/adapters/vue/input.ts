
/**
 * Vue adapter for OriginSwift Input component
 * 
 * This is a fully native Vue implementation matching the React component's
 * functionality and styling using Vue's render functions.
 */

import { defineComponent, h, PropType } from 'vue';
import { InputProps } from '../../types';

/**
 * Vue-compatible Input component that matches the OriginSwift React Input
 */
export const VueInput = defineComponent({
  name: 'SwiftInput',
  
  props: {
    type: {
      type: String as PropType<'text' | 'checkbox' | 'radio'>,
      default: 'text'
    },
    label: String,
    name: String,
    value: [String, Boolean],
    placeholder: String,
    disabled: Boolean,
    required: Boolean,
    error: String,
    checked: Boolean,
    radioGroup: String,
    className: String,
    testId: String
  },
  
  emits: ['change'],
  
  setup(props, { emit }) {
    const handleChange = (e: Event) => {
      if (props.type === 'checkbox') {
        emit('change', (e.target as HTMLInputElement).checked);
      } else {
        emit('change', (e.target as HTMLInputElement).value);
      }
    };
    
    // Compute classes based on input type and props
    const getInputClassNames = () => {
      const baseClasses = {
        text: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swift-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        checkbox: 'h-4 w-4 rounded border-gray-300 text-swift-blue focus:ring-swift-blue',
        radio: 'h-4 w-4 border-gray-300 text-swift-blue focus:ring-swift-blue'
      }[props.type as 'text' | 'checkbox' | 'radio'];
      
      return [
        'swift-input',
        baseClasses,
        props.disabled && 'swift-input-disabled',
        props.error && 'swift-input-error border-swift-red focus-visible:ring-swift-red',
        props.className
      ];
    };
    
    const isCheckboxOrRadio = props.type === 'checkbox' || props.type === 'radio';
    
    return () => {
      const inputElement = h('input', {
        id: props.name,
        name: isCheckboxOrRadio && props.radioGroup ? props.radioGroup : props.name,
        type: props.type,
        value: typeof props.value === 'string' ? props.value : undefined,
        placeholder: props.placeholder,
        checked: props.checked,
        disabled: props.disabled,
        required: props.required,
        class: getInputClassNames(),
        onChange: handleChange,
        'aria-invalid': !!props.error,
        'aria-describedby': props.error ? `${props.name}-error` : undefined,
        'data-testid': props.testId
      });
      
      const labelElement = props.label ? h('label', {
        for: props.name,
        class: isCheckboxOrRadio 
          ? 'swift-input-label ml-2 block text-sm text-gray-700' 
          : 'swift-input-label block text-sm font-medium text-gray-700 mb-1'
      }, [
        props.label,
        props.required && h('span', { class: 'text-swift-red ml-1' }, '*')
      ]) : null;
      
      const errorElement = props.error ? h('p', {
        id: `${props.name}-error`,
        class: 'swift-input-error mt-1 text-sm text-swift-red'
      }, props.error) : null;
      
      if (isCheckboxOrRadio) {
        return h('div', { class: 'swift-input-wrapper w-full' }, [
          h('div', { class: 'flex items-center' }, [
            inputElement,
            labelElement
          ]),
          errorElement
        ]);
      } else {
        return h('div', { class: 'swift-input-wrapper w-full' }, [
          labelElement,
          inputElement,
          errorElement
        ]);
      }
    };
  }
});

// Export types
export type { InputProps };
