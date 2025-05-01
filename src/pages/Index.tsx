import React, { useState } from 'react';
import { Input as SwiftInput, Button as SwiftButton, Select as SwiftSelect, Form as SwiftForm } from '../packages/origin-swift-ui';

const Index = () => {
  const [textValue, setTextValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [selectedValue, setSelectedValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleCheckboxChange = (value: boolean) => {
    setIsChecked(value);
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
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
    { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OriginSwift UI Library</h1>
          <p className="text-lg text-gray-600">Cross-framework component library for React, Vue, and Astro</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Individual Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Input Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Text Input</p>
                  <SwiftInput 
                    type="text"
                    label="Text Input"
                    value={textValue}
                    onChange={handleTextChange}
                    placeholder="Type something..."
                  />
                  {textValue && (
                    <p className="mt-2 text-sm text-gray-500">Current value: {textValue}</p>
                  )}
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Checkbox Input</p>
                  <SwiftInput 
                    type="checkbox"
                    label="Checkbox Input"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Current state: {isChecked ? 'Checked' : 'Unchecked'}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Radio Input</p>
                <div className="space-y-2">
                  <SwiftInput 
                    type="radio"
                    label="Option 1"
                    name="radioGroup"
                    value="option1"
                    checked={selectedRadio === 'option1'}
                    onChange={() => handleRadioChange('option1')}
                    radioGroup="demoRadio"
                  />
                  <SwiftInput 
                    type="radio"
                    label="Option 2"
                    name="radioGroup"
                    value="option2"
                    checked={selectedRadio === 'option2'}
                    onChange={() => handleRadioChange('option2')}
                    radioGroup="demoRadio"
                  />
                  <SwiftInput 
                    type="radio"
                    label="Option 3"
                    name="radioGroup"
                    value="option3"
                    checked={selectedRadio === 'option3'}
                    onChange={() => handleRadioChange('option3')}
                    radioGroup="demoRadio"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Selected option: {selectedRadio}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Select Component</h3>
              <div className="mb-6">
                <SwiftSelect
                  label="Select Example"
                  options={selectOptions}
                  value={selectedValue}
                  onChange={handleSelectChange}
                  placeholder="Choose an option"
                />
                {selectedValue && (
                  <p className="mt-2 text-sm text-gray-500">
                    Selected value: {selectedValue}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <SwiftButton variant="primary" onClick={handleButtonClick}>Primary</SwiftButton>
                <SwiftButton variant="secondary" onClick={handleButtonClick}>Secondary</SwiftButton>
                <SwiftButton variant="outline" onClick={handleButtonClick}>Outline</SwiftButton>
                <SwiftButton variant="ghost" onClick={handleButtonClick}>Ghost</SwiftButton>
                <SwiftButton variant="destructive" onClick={handleButtonClick}>Destructive</SwiftButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Button Sizes</h3>
              <div className="flex items-center flex-wrap gap-4">
                <SwiftButton variant="primary" size="sm" onClick={handleButtonClick}>Small</SwiftButton>
                <SwiftButton variant="primary" size="md" onClick={handleButtonClick}>Medium</SwiftButton>
                <SwiftButton variant="primary" size="lg" onClick={handleButtonClick}>Large</SwiftButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <SwiftButton variant="primary" onClick={handleButtonClick}>Normal</SwiftButton>
                <SwiftButton variant="primary" disabled onClick={handleButtonClick}>Disabled</SwiftButton>
                <SwiftButton variant="primary" loading onClick={handleButtonClick}>Loading</SwiftButton>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete Form Example</h2>
          
          {formSubmitted ? (
            <div className="bg-swift-green/10 text-swift-green p-4 rounded-md border border-swift-green/20">
              <p className="font-medium">Form submitted successfully!</p>
            </div>
          ) : (
            <SwiftForm onSubmit={handleFormSubmit} />
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This is a demonstration of the OriginSwift UI library components in React.<br />
            The same components can be used in Vue and Astro with the appropriate wrappers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
