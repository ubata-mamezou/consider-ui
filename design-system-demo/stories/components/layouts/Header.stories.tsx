import { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../../src/components';

// metadata
const meta = {
  title: 'components/layouts/header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
} satisfies Meta<typeof Header>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const basic: Story = {
  name: '基本',
  parameters: {
    docs: {
      description: {
        story: '基本',
      },
    },
  },
  args: {
    label: 'UI sample system(from Storybook)'
  },
};
