import { Meta, StoryObj } from '@storybook/react';
import { LeftPanel } from '../../../src/components';

// metadata
const meta = {
  title: 'components/layouts/left-panel',
  component: LeftPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
} satisfies Meta<typeof LeftPanel>;

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
    links: [
      { label: 'Top', path: '' },
      { label: 'page1', path: '' },
      { label: 'page2', path: '' },
    ]
  },
};

export const none: Story = {
  name: 'リンク先なし',
  parameters: {
    docs: {
      description: {
        story: 'リンク先なし',
      },
    },
  },
  args: {
    links: [
    ]
  },
};
