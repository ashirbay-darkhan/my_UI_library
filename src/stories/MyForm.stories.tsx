// MyForm.stories.tsx

import React from 'react';
import { Story } from '@storybook/react';
import MyForm, { MyFormProps, FormData } from '../MyForm/MyForm';

export default {
  title: 'Example/MyForm',
  component: MyForm,
};

const Template: Story<MyFormProps> = (args) => {
  const handleSubmit = (formData: FormData) => {
    console.log('Form submitted with data:', formData);
  };

  return <MyForm {...args} onSubmit={handleSubmit} />;
};

export const Default = Template.bind({});
Default.args = {};
