import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

// metadata
const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    //   backgroundColor: { control: 'color' },
  },
  args: {
    id: 'demo',
    label: 'ボタン表示名',
    onClick: () => {},
  },
} satisfies Meta<typeof Button>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'プライマリーボタン：次の画面へ遷移するアクションを含むボタン',
      },
    },
  },
  args: {
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'セカンダリーボタン：プライマリーボタンに比べると重要度が低いアクションを含むボタン',
      },
    },
  },
  args: {
    type: `secondary`,
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '非活性ボタン',
      },
    },
  },
  args: {
    disabled: true,
  },
};
