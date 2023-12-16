import type { Meta, StoryObj } from '@storybook/react';

import MyTable from "../MyTable/MyTable";

const meta = {
  title: 'Example/MyTable',
  component: MyTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headers: { control: ['Name', 'Age', 'Location'] },
    data: { control: [['John', 20, 'London'], ['Sara', 30, 'New York']] },
  },
} satisfies Meta<typeof MyTable>;

export default meta;
type Story = StoryObj<typeof MyTable>;

export const Table: Story = {
  args: {
    headers: ['Name', 'Age', 'Location'],
    data: [['John', 20, 'London'], ['Sara', 30, 'New York']]
  }
};
