// MyModal.stories.tsx

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import MyModal, { MyModalProps } from '../MyModal/MyModal';

export default {
  title: 'Example/MyModal',
  component: MyModal,
};

const Template: Story<MyModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <MyModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Lorem Ipsum is simply dummy</h2>
        <p>Additional content...</p>
      </MyModal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
