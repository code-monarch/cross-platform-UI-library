
import React, { useState } from 'react';
import { Button, Input, Select, Form } from '../../packages/origin-swift-ui';

const ReactExample = () => {
  const [textValue, setTextValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleCheckboxChange = (value: boolean) => {
    setIsChecked(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">OriginSwift UI - React Example</h1>

      <div className="space-y-8">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-medium mb-4">Input Components</h2>
          
          <div className="space-y-4">
            <Input 
              type="text"
              label="Text Input"
              value={textValue}
              onChange={handleTextChange}
              placeholder="Type something..."
            />
            
            {textValue && (
              <p className="text-sm text-gray-600">You typed: {textValue}</p>
            )}
            
            <Input 
              type="checkbox"
              label="Accept terms and conditions"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            
            <p className="text-sm text-gray-600">
              Checkbox is {isChecked ? 'checked' : 'unchecked'}
            </p>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-medium mb-4">Select Component</h2>
          
          <Select
            label="Select an option"
            options={selectOptions}
            value={selectedValue}
            onChange={handleSelectChange}
            placeholder="Choose an option"
          />
          
          {selectedValue && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: {selectedValue}
            </p>
          )}
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-medium mb-4">Button Variants</h2>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
          
          <div className="mt-4">
            <Button variant="primary" loading>Loading</Button>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-medium mb-4">Form Component</h2>
          
          {formSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-md">
              <p>Form submitted successfully!</p>
            </div>
          ) : (
            <Form onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactExample;
