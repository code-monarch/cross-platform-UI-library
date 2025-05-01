
/**
 * Vue adapter for OriginSwift Form component
 * 
 * This is a fully native Vue implementation matching the React component's
 * functionality and styling using Vue's render functions.
 */

import { defineComponent, h, ref, reactive } from 'vue';
import { VueInput } from './input';
import { VueButton } from './button';
import { VueSelect } from './select';
import type { FormData, FormProps } from '../../types';

/**
 * Vue-compatible Form component that matches the OriginSwift React Form
 */
export const VueForm = defineComponent({
  name: 'SwiftForm',
  
  props: {
    className: String,
    onSubmit: Function
  },
  
  emits: ['submit'],
  
  setup(props, { emit }) {
    const formData = ref<FormData>({
      name: '',
      email: '',
      country: '',
      agreeToTerms: false,
      notificationType: 'email',
    });

    const errors = reactive<Record<string, string>>({});

    const handleChange = (field: keyof FormData) => (value: any) => {
      formData.value[field] = value;
      
      // Clear error when field is changed
      if (errors[field]) {
        delete errors[field];
      }
    };

    const validateForm = (): boolean => {
      // Clear previous errors
      Object.keys(errors).forEach(key => delete errors[key]);
      
      if (!formData.value.name.trim()) {
        errors.name = 'Name is required';
      }
      
      if (!formData.value.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.value.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!formData.value.country) {
        errors.country = 'Country is required';
      }

      if (!formData.value.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the terms';
      }
      
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      
      if (validateForm()) {
        // Call both the prop function and emit the event for Vue flexibility
        if (props.onSubmit) {
          props.onSubmit(formData.value);
        }
        emit('submit', formData.value);
        console.log('Form submitted:', formData.value);
      }
    };

    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'au', label: 'Australia' },
      { value: 'jp', label: 'Japan' },
    ];

    return () => h('form', {
      class: `space-y-6 ${props.className || ''}`,
      onSubmit: handleSubmit 
    }, [
      // Name input
      h(VueInput, {
        type: 'text',
        label: 'Full Name',
        name: 'name',
        value: formData.value.name,
        onChange: handleChange('name'),
        error: errors.name,
        required: true
      }),
      
      // Email input
      h(VueInput, {
        type: 'text',
        label: 'Email Address',
        name: 'email',
        value: formData.value.email,
        onChange: handleChange('email'),
        error: errors.email,
        required: true
      }),
      
      // Country select
      h(VueSelect, {
        label: 'Country',
        name: 'country',
        options: countries,
        value: formData.value.country,
        onChange: handleChange('country'),
        error: errors.country,
        required: true,
        placeholder: 'Select your country'
      }),
      
      // Notification preference
      h('div', { class: 'space-y-2' }, [
        h('div', { class: 'text-sm font-medium text-gray-700 mb-1' }, 'Notification Preference'),
        
        h('div', { class: 'space-y-2' }, [
          h(VueInput, {
            type: 'radio',
            label: 'Email',
            name: 'notificationType',
            value: 'email',
            checked: formData.value.notificationType === 'email',
            onChange: () => handleChange('notificationType')('email'),
            radioGroup: 'notificationType'
          }),
          
          h(VueInput, {
            type: 'radio',
            label: 'SMS',
            name: 'notificationType',
            value: 'sms',
            checked: formData.value.notificationType === 'sms',
            onChange: () => handleChange('notificationType')('sms'),
            radioGroup: 'notificationType'
          }),
          
          h(VueInput, {
            type: 'radio',
            label: 'Push Notification',
            name: 'notificationType',
            value: 'push',
            checked: formData.value.notificationType === 'push',
            onChange: () => handleChange('notificationType')('push'),
            radioGroup: 'notificationType'
          })
        ])
      ]),
      
      // Terms checkbox
      h(VueInput, {
        type: 'checkbox',
        label: 'I agree to the terms and conditions',
        name: 'agreeToTerms',
        checked: formData.value.agreeToTerms,
        onChange: handleChange('agreeToTerms'),
        error: errors.agreeToTerms
      }),
      
      // Submit button
      h(VueButton, {
        type: 'submit',
        variant: 'primary',
        size: 'md'
      }, 'Submit')
    ]);
  }
});

// Export types
export type { FormData, FormProps };
