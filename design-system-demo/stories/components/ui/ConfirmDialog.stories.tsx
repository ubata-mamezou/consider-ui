import { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog } from '../../../src/components';
import { action } from "@storybook/addon-actions";

// metadata
const meta = {
  title: 'components/ui/dialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: '確認ダイアログタイトル',
    contentText: '確認ダイアログコンテンツテキスト',
    executeKey: {id: '1', version: 0},
    onClickExecute: action('onClick execution button'),
    onClickCancel: action('onClick cancel button'),
    openDialogCondition: true,
    onCloseDialog: action('close dialog'),
  },
} satisfies Meta<typeof ConfirmDialog>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const Basic: Story = {
  name: '基本',
  parameters: {
    docs: {
      description: {
        story: '基本',
      },
    },
  },
  args: {
  },
};
