
/**
 * Vue adapter for OriginSwift Button component
 * 
 * This is a fully native Vue implementation matching the React component's
 * functionality and styling using Vue's render functions.
 */

import { defineComponent, h, PropType, VNode } from 'vue';
import { ButtonProps } from '../../types';

/**
 * Vue-compatible Button component that matches the OriginSwift React Button
 */
export const VueButton = defineComponent({
  name: 'SwiftButton',
  
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'>,
      default: 'primary'
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md'
    },
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    className: String,
    testId: String,
    leftIcon: [Object, Function] as PropType<VNode | (() => VNode)>,
    rightIcon: [Object, Function] as PropType<VNode | (() => VNode)>
  },
  
  emits: ['click'],
  
  setup(props, { emit, slots }) {
    const handleClick = () => {
      emit('click');
    };
    
    // Compute classes based on variants and props
    const getClassNames = () => {
      const baseClasses = 'swift-button inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
      
      const variantClasses = {
        primary: 'bg-swift-blue text-white hover:bg-swift-blue/90 active:bg-swift-blue/100',
        secondary: 'bg-swift-gray-200 text-swift-gray-800 hover:bg-swift-gray-300 active:bg-swift-gray-400',
        outline: 'border border-swift-gray-300 bg-transparent hover:bg-swift-gray-100 text-swift-gray-800',
        ghost: 'bg-transparent hover:bg-swift-gray-100 text-swift-gray-800',
        destructive: 'bg-swift-red text-white hover:bg-swift-red/90',
      }[props.variant];
      
      const sizeClasses = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-6 py-3 text-base',
      }[props.size];
      
      return [baseClasses, variantClasses, sizeClasses, props.className, props.loading && 'opacity-70 pointer-events-none'];
    };
    
    return () => h('button', {
      class: getClassNames(),
      type: props.type,
      disabled: props.disabled || props.loading,
      onClick: handleClick,
      'data-testid': props.testId
    }, [
      // Loading spinner
      props.loading && h('svg', {
        class: 'animate-spin -ml-1 mr-2 h-4 w-4 text-current',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24'
      }, [
        h('circle', {
          class: 'opacity-25',
          cx: '12',
          cy: '12',
          r: '10',
          stroke: 'currentColor',
          'stroke-width': '4'
        }),
        h('path', {
          class: 'opacity-75',
          fill: 'currentColor',
          d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        })
      ]),
      
      // Left icon - properly handled as VNode or function returning VNode
      props.leftIcon && !props.loading && h('span', { class: 'mr-2' }, [
        typeof props.leftIcon === 'function' ? props.leftIcon() : props.leftIcon
      ]),
      
      // Content
      slots.default && slots.default(),
      
      // Right icon - properly handled as VNode or function returning VNode
      props.rightIcon && h('span', { class: 'ml-2' }, [
        typeof props.rightIcon === 'function' ? props.rightIcon() : props.rightIcon
      ])
    ]);
  }
});

// Export types
export type { ButtonProps };
