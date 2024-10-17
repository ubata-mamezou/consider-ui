import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../src/components';

// metadata
const meta = {
  title: 'components/layouts/footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
} satisfies Meta<typeof Footer>;

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
    copyright: '© 2024 MAU(from Storybook)'
  },
};
