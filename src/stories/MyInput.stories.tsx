import type { Meta, StoryObj } from '@storybook/react';

import MyInput from "../MyInput/MyInput";

const meta = {
  title: 'Example/MyInput',
  component: MyInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    big: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof MyInput>;

export const Input: Story = {
  args: {
    placeholder: 'Enter text',
  }
};

export const BigInput: Story = {
  args: {
    big: true,
    placeholder: 'Enter text',
  }
};
