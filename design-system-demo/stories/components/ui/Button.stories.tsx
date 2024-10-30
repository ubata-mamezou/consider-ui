import { action } from '@storybook/addon-actions';
import { expect } from "@storybook/jest";
import { Meta, StoryObj } from '@storybook/react';
import { within } from "@storybook/testing-library";
import { Button } from '../../../src/components';

// metadata
const meta = {
  title: 'components/ui/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    //XXX: 空行がないとエラーになってしまうため、コメントを書いて回避
  },
  args: {
    label: 'ボタン表示名',
    onClick: action('onClick event'),
  },
} satisfies Meta<typeof Button>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const Primary: Story = {
  name: 'プライマリーボタン',
  parameters: {
    docs: {
      description: {
        story: '次の画面へ遷移するアクションを含むボタン',
      },
    },
  },
  args: {
  },
  play: async ({ canvasElement, step }) => {
    await step("ボタンにLabelの文字列が表示されている", async () => {
      const canvas = within(canvasElement);
      const button = canvas.getByText("ボタン表示名");

      await expect(canvas.getByText("ボタン表示名")).toBeInTheDocument();
      await expect(button.classList.contains("MuiButton-colorPrimary")).toBe(true);
    });
  },
};

export const Secondary: Story = {
  name: 'セカンダリーボタン',
  parameters: {
    docs: {
      description: {
        story: 'プライマリーボタンに比べると重要度が低いアクションを含むボタン',
      },
    },
  },
  args: {
    type: `secondary`,
  },
};

export const Tertiary: Story = {
  name: 'ターシャリーボタン',
  parameters: {
    docs: {
      description: {
        story: 'セカンダリーボタンに比べると重要度が低いアクションを含むボタン',
      },
    },
  },
  args: {
    type: `other`,
  },
};

export const Disabled: Story = {
  name: '非活性',
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
