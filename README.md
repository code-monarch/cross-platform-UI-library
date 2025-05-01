
# OriginSwift UI Library

A cross-framework component library that works seamlessly with React, Vue, and Astro.

## Overview

OriginSwift UI is a lightweight, type-safe component library designed to work across multiple frontend frameworks. It provides a consistent UI experience regardless of the framework you're using.

## Features

- 🧩 Framework agnostic - works in React, Vue, and Astro
- 📝 Full TypeScript support
- 🎨 Consistent styling with Tailwind CSS
- ♿ Accessibility built-in
- 🏎️ Lightweight and performance-focused

## Project Structure

OriginSwift UI is organized as a pnpm workspace monorepo:

```
origin-swift-ui/
├── packages/
│   └── origin-swift-ui/  # Main library package
│       ├── components/   # Core UI components (React)
│       ├── adapters/     # Framework-specific adapters
│       │   ├── vue/      # Vue adapters
│       │   └── astro/    # Astro adapters
│       └── types/        # TypeScript definitions
├── examples/            # Example implementations
│   ├── react/           # React example
│   ├── vue/             # Vue example
│   └── astro/           # Astro example
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/code-monarch/cross-platform-UI-library.git
   cd cross-platform-UI-library
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

## Usage

### React

```tsx
import { Button, Input, Select, Form } from '@origin-swift-ui/react';

function MyComponent() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <Input 
        type="text"
        label="Username"
        value={value}
        onChange={(val) => setValue(val)}
      />
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Submit
      </Button>
      
      <Select
        label="Options"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]}
        onChange={(val) => console.log(val)}
      />
      
      <Form onSubmit={(data) => console.log('Form data:', data)} />
    </div>
  );
}
```

### Vue

```vue
<script setup>
import { ref } from 'vue';
import { Button, Input, Select, Form } from '@origin-swift-ui/vue';

const value = ref('');
const selectedOption = ref('');

const handleSubmit = (data) => {
  console.log('Form submitted:', data);
};
</script>

<template>
  <div>
    <Input 
      type="text"
      label="Username"
      :value="value"
      @change="(val) => value = val"
    />
    
    <Button variant="primary" @click="() => console.log('Clicked!')">
      Submit
    </Button>
    
    <Select
      label="Options"
      :options="[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]"
      :value="selectedOption"
      @change="(val) => selectedOption = val"
    />
    
    <Form @submit="handleSubmit" />
  </div>
</template>
```

### Astro

```astro
---
import { Button, Input, Select, Form } from '@origin-swift-ui/astro';

// Server-side code if needed
const handleSubmit = (data) => {
  console.log('Form submitted:', data);
};
---

<div>
  <!-- Use client directives for interactive components -->
  <Input 
    client:load
    type="text"
    label="Username"
    placeholder="Enter username"
  />
  
  <Button 
    client:visible
    variant="primary"
  >
    Submit
  </Button>
  
  <Select
    client:idle
    label="Options"
    options={[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' }
    ]}
    placeholder="Select an option"
  />
  
  <!-- For forms with client-side interactivity -->
  <Form client:load />
</div>

<script>
  // Client-side JavaScript for additional interactivity
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Components loaded');
  });
</script>
```

In Astro, use the appropriate client directive based on when you want the component to hydrate:
- `client:load`: Hydrate the component immediately on page load
- `client:visible`: Hydrate when the component becomes visible in the viewport
- `client:idle`: Hydrate during browser idle time
- `client:media`: Hydrate based on a media query

## Component API

### Button

```tsx
<Button 
  variant="primary" | "secondary" | "outline" | "ghost" | "destructive"
  size="sm" | "md" | "lg"
  disabled={boolean}
  loading={boolean}
  leftIcon={ReactNode}
  rightIcon={ReactNode}
  onClick={() => {}}
>
  Button Text
</Button>
```

### Input

```tsx
<Input 
  type="text" | "checkbox" | "radio"
  label="Label Text"
  name="inputName"
  value="inputValue"
  placeholder="Placeholder text"
  disabled={boolean}
  required={boolean}
  error="Error message"
  onChange={(value) => {}}
/>
```

### Select

```tsx
<Select 
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
  label="Select Label"
  value="selectedValue"
  placeholder="Choose an option"
  disabled={boolean}
  required={boolean}
  error="Error message"
  onChange={(value) => {}}
/>
```

### Form

```tsx
<Form
  onSubmit={(data) => {
    // data contains all form values
    console.log(data);
  }}
/>
```

## Technical Implementation

OriginSwift UI uses:

- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Framework adapters** for Vue and Astro compatibility
- **pnpm** for package management in a monorepo structure

## Extending the Library

You can customize components with CSS classes:

```tsx
<Button 
  className="my-custom-class" 
  variant="primary"
>
  Custom Button
</Button>
```

## License

MIT
