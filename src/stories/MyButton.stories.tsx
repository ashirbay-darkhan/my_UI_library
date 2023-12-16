import type { Meta, StoryObj } from '@storybook/react';

import MyButton from "../MyButton/MyButton";

const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof MyButton>;

export const RedBtn: Story = {
  args: {
    color: 'red',
    children: "Button"
  },
};

export const OrangeBtn: Story = {
  args: {
    color: 'orange',
    children: "Button"
  },
};

export const BigBtn: Story = {
  args: {
    color: 'black',
    big: true,
    children: "Button"
  },
};
