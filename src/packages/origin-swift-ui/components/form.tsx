
import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { Select } from './select';

interface FormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  country: string;
  agreeToTerms: boolean;
  notificationType: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, className }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    agreeToTerms: false,
    notificationType: 'email',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof FormData) => (value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Clear error when field is changed
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit?.(formData);
      console.log('Form submitted:', formData);
    }
  };

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'jp', label: 'Japan' },
  ];

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className || ''}`}>
      <Input
        type="text"
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange('name')}
        error={errors.name}
        required
      />
      
      <Input
        type="text"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange('email')}
        error={errors.email}
        required
      />
      
      <Select
        label="Country"
        name="country"
        options={countries}
        value={formData.country}
        onChange={handleChange('country')}
        error={errors.country}
        required
        placeholder="Select your country"
      />
      
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-700 mb-1">Notification Preference</div>
        
        <div className="space-y-2">
          <Input
            type="radio"
            label="Email"
            name="notificationType"
            value="email"
            checked={formData.notificationType === 'email'}
            onChange={() => handleChange('notificationType')('email')}
            radioGroup="notificationType"
          />
          
          <Input
            type="radio"
            label="SMS"
            name="notificationType"
            value="sms"
            checked={formData.notificationType === 'sms'}
            onChange={() => handleChange('notificationType')('sms')}
            radioGroup="notificationType"
          />
          
          <Input
            type="radio"
            label="Push Notification"
            name="notificationType"
            value="push"
            checked={formData.notificationType === 'push'}
            onChange={() => handleChange('notificationType')('push')}
            radioGroup="notificationType"
          />
        </div>
      </div>
      
      <Input
        type="checkbox"
        label="I agree to the terms and conditions"
        name="agreeToTerms"
        checked={formData.agreeToTerms}
        onChange={handleChange('agreeToTerms')}
        error={errors.agreeToTerms}
      />
      
      <Button type="submit" variant="primary" size="md">
        Submit
      </Button>
    </form>
  );
};

export { Form };
