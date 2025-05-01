
<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">OriginSwift UI - Vue Example</h1>

    <div class="space-y-8">
      <div class="p-4 border rounded-lg">
        <h2 class="text-xl font-medium mb-4">Input Components</h2>
        
        <div class="space-y-4">
          <Input 
            type="text"
            label="Text Input"
            :value="textValue"
            @change="handleTextChange"
            placeholder="Type something..."
          />
          
          <p v-if="textValue" class="text-sm text-gray-600">
            You typed: {{ textValue }}
          </p>
          
          <Input 
            type="checkbox"
            label="Accept terms and conditions"
            :checked="isChecked"
            @change="handleCheckboxChange"
          />
          
          <p class="text-sm text-gray-600">
            Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}
          </p>
        </div>
      </div>

      <div class="p-4 border rounded-lg">
        <h2 class="text-xl font-medium mb-4">Select Component</h2>
        
        <Select
          label="Select an option"
          :options="selectOptions"
          :value="selectedValue"
          @change="handleSelectChange"
          placeholder="Choose an option"
        />
        
        <p v-if="selectedValue" class="mt-2 text-sm text-gray-600">
          Selected: {{ selectedValue }}
        </p>
      </div>

      <div class="p-4 border rounded-lg">
        <h2 class="text-xl font-medium mb-4">Button Variants</h2>
        
        <div class="flex flex-wrap gap-2">
          <Button variant="primary" @click="handleClick">Primary</Button>
          <Button variant="secondary" @click="handleClick">Secondary</Button>
          <Button variant="outline" @click="handleClick">Outline</Button>
          <Button variant="ghost" @click="handleClick">Ghost</Button>
          <Button variant="destructive" @click="handleClick">Destructive</Button>
        </div>
        
        <div class="mt-4 flex items-center gap-2">
          <Button variant="primary" size="sm" @click="handleClick">Small</Button>
          <Button variant="primary" size="md" @click="handleClick">Medium</Button>
          <Button variant="primary" size="lg" @click="handleClick">Large</Button>
        </div>
        
        <div class="mt-4">
          <Button variant="primary" :loading="true" @click="handleClick">Loading</Button>
        </div>
      </div>

      <div class="p-4 border rounded-lg">
        <h2 class="text-xl font-medium mb-4">Form Component</h2>
        
        <div v-if="formSubmitted" class="bg-green-100 text-green-700 p-4 rounded-md">
          <p>Form submitted successfully!</p>
        </div>
        <Form v-else @submit="handleFormSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button, Input, Select, Form } from '../../packages/origin-swift-ui/vue';

export default {
  components: {
    Button,
    Input,
    Select,
    Form
  },
  
  setup() {
    const textValue = ref('');
    const isChecked = ref(false);
    const selectedValue = ref('');
    const formSubmitted = ref(false);
    
    const selectOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    
    const handleTextChange = (value) => {
      textValue.value = value;
    };
    
    const handleCheckboxChange = (value) => {
      isChecked.value = value;
    };
    
    const handleSelectChange = (value) => {
      selectedValue.value = value;
    };
    
    const handleClick = () => {
      console.log('Button clicked');
    };
    
    const handleFormSubmit = (data) => {
      console.log('Form submitted:', data);
      formSubmitted.value = true;
      setTimeout(() => {
        formSubmitted.value = false;
      }, 3000);
    };
    
    return {
      textValue,
      isChecked,
      selectedValue,
      formSubmitted,
      selectOptions,
      handleTextChange,
      handleCheckboxChange,
      handleSelectChange,
      handleClick,
      handleFormSubmit
    };
  }
};
</script>
